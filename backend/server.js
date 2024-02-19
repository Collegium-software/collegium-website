const express = require("express");
require("dotenv").config();
const path = require("path");
const app = express();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const corsOptions = {
  origin: "https://collegium.onrender.com",
  // Add more origins if needed, e.g., ['https://your-render-app.onrender.com', 'http://localhost:3000']
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

//middleware for login session:
app.use(
  session({
    secret: "collegium24",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 60000,
    },
  })
);
//dummy username and  password
const dummyUser = {
  username: "user@user.com",
  password: "password",
};
//route for login page:
app.post("/admin/login", (req, res) => {
  const { username, password } = req.body;

  if (username === dummyUser.username && password === dummyUser.password) {
    req.session.user = username;
    res.status(200).json({ message: "Login Successful!" });
  } else {
    res.status(401).json({ message: "Invalid cridentials" });
  }
});
app.get("/admin/check-auth", (req, res) => {
  if (req.session.user) {
    res.status(200).json({ authenticated: true });
  } else {
    res.status(401).json({ authenticated: false });
  }
});
app.post("/admin/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("Error destroying the session", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(200).json({ message: "Logout successful" });
    }
  });
});
const pathToBuild = path.join(__dirname, "../frontend/build");
app.use(express.static(pathToBuild));
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

app.get("/api/blogs", async (req, res) => {
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
app.post("/api/blogs", async (req, res) => {
  try {
    await client.connect();
    const database = client.db();
    const blogsCollection = database.collection("blogsData");

    const newBlog = req.body;
    console.log("My data from form (a): ", newBlog);
    const inputDate = new Date(newBlog.date + "T00:00:00-07:00");
    const formattedDate = inputDate.toLocaleDateString("en-us", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "America/Edmonton",
    });
    newBlog.date = formattedDate;
    console.log("My data from form (b): ", newBlog);
    const result = await blogsCollection.insertOne(newBlog);

    if (result.acknowledged) {
      res.status(201).send("Blog inserted successfully!");
    } else {
      // Handle the case where result.ops is undefined or empty
      res.status(500).json({ error: "Unexpected result from the database" });
    }
  } catch (error) {
    console.error("Error creating new blog:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
});

app.delete("/api/blogs/:title", async (req, res) => {
  try {
    await client.connect();
    const database = client.db();
    const blogCollection = database.collection("blogsData");
    const blogTitle = req.params.title;
    const result = await blogCollection.deleteOne({ title: blogTitle });
    if (result.deletedCount === 1) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Blog not found" });
    }
  } catch (error) {
    console.error("Error deleting blog", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await client.close();
  }
});

app.patch("/api/blogs/:title", async (req, res) => {
  try {
    await client.connect();
    const database = client.db();
    const blogCollection = database.collection("blogsData");
    const blogTitle = req.params.title;

    const existingBlog = await blogCollection.findOne({
      title: blogTitle,
    });
    if (!existingBlog) {
      return res.status(404).json({ error: "blog not found" });
    }

    const updatedBlog = { ...existingBlog, ...req.body };

    const inputDate = new Date(updatedBlog.date + "T00:00:00-07:00");
    const formattedDate = inputDate.toLocaleDateString("en-us", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "America/Edmonton",
    });
    updatedBlog.date = formattedDate;
    await blogCollection.updateOne({ title: blogTitle }, { $set: updatedBlog });

    return res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.use("*", (req, res) => {
  res.sendFile(path.join(pathToBuild, "index.html"));
});
app.listen(PORT, () => {
  console.log("Server is listening to the port ", PORT);
});
