const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;
const cors = require("cors");
app.use(cors());
app.use(express.json());
//from mongodb:
const { MongoClient, ServerApiVersion } = require("mongodb");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/blogs", async (req, res) => {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    const database = client.db();
    const blogCollection = database.collection("blogsData");
    const blogsData = await blogCollection.find({}).toArray();
    console.log("Blogs Data: ", blogsData);
    res.json(blogsData);
  } catch (error) {
    console.log("Error fetching blogs data", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await client.close();
  }
});
app.post("/blogs", async (req, res) => {
  try {
    await client.connect();
    const database = client.db();
    const blogsCollection = database.collection("blogsData");

    const newBlog = req.body;

    const result = await blogsCollection.insertOne(newBlog);

    res.status(201).json(result.ops[0]);
  } catch (error) {
    console.error("Error creating new blog:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
});

app.delete("/blogs/:id", async (req, res) => {
  try {
    await client.connect();
    const database = client.db();
    const blogCollection = database.collection("blogsData");
    const blogId = parseInt(req.params.id, 10);
    const result = await blogCollection.deleteOne({ id: blogId });
    if (result.deletedCount === 1) {
      res.status(204).send();
    } else {
      res.status(204).json({ error: "Blog not found" });
    }
  } catch (error) {
    console.error("Error deleting blog", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await client.close();
  }
});

app.patch("/blogs/:id", async (req, res) => {
  try {
    await client.connect();
    const database = client.db();
    const blogCollection = database.collection("blogsData");
    const blogId = parseInt(req.params.id, 10);
    const existingBlog = await blogCollection.findOne({ id: blogId });
    if (!existingBlog) {
      return res.status(404).json({ error: "blog not found" });
    }
    const updatedBlog = { ...existingBlog, ...req.body };
    await blogCollection.updateOne({ id: blogId }, { $set: updatedBlog });

    return res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
app.listen(PORT, () => {
  console.log("Server is listening to the port ", PORT);
});
