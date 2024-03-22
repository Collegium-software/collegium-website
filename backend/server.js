const express = require("express");
require("dotenv").config();
const path = require("path");
const app = express();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const multer = require("multer");

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
  username: "admin@collegium.com",
  password: "123",
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

const upload = multer({ dest: "uploads/" });

//new blog creation:
app.post("/create", upload.single("file"), async (req, res) => {
  try {
    // Connect to MongoDB
    await client.connect();
    const database = client.db();
    const blogsCollection = database.collection("blogsData");

    // Read the uploaded file
    const imageBuffer = fs.readFileSync(req.file.path);

    // Insert the image into MongoDB
    const result = await blogsCollection.insertOne({
      id: req.body.id,
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      image: imageBuffer,
      date: req.body.date,
      button: {
        label: req.body.label,
        color: "black",
        to: `/blogs/blog${req.body.id}`,
      },
    });

    // Delete the temporary file
    fs.unlinkSync(req.file.path);

    res.status(200).send("Image uploaded successfully");
  } catch (err) {
    console.error("Error uploading image:", err);
    res.status(500).send("Internal server error");
  } finally {
    await client.close();
  }
});

app.get("/api/blogsData", async (req, res) => {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    const database = client.db();
    const blogCollection = database.collection("blogsData");
    const blogsData = await blogCollection.find().toArray();

    console.log("Blogs Pictures Data: ", blogsData);

    res.json(blogsData);
  } catch (error) {
    console.log("Error fetching blogs data", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    // fs.unlinkSync(req.file.path);
    await client.close();
  }
});
//end of pic upload test

//new patch endpoint:
app.patch("/update/:title", upload.single("image"), async (req, res) => {
  try {
    await client.connect();
    const database = client.db();
    const blogCollection = database.collection("blogsData");

    //preparing the update data:
    const updateData = {
      id: req.body.id,
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      date: req.body.date,
      button: {
        label: req.body.label,
        color: "black",
        to: `/blogs/blog${req.body.id}`,
      },
    };
    if (req.file) {
      const imageBuffer = fs.readFileSync(req.file.path);
      updateData.image = imageBuffer;
    }
    // Update the blog instance
    const result = await blogCollection.updateOne(
      { title: req.params.title }, // Filter by title
      { $set: updateData } // Set the updated data
    );
    if (result.matchedCount === 0) {
      return res.status(404).send("Blog not found");
    }

    // Delete the temporary file
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }

    res.status(200).send("Blog updated successfully");
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).send("Internal server error");
  } finally {
    await client.close();
  }
});
//end of new patch endpoint

app.delete("/delete/:title", async (req, res) => {
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

app.use("*", (req, res) => {
  res.sendFile(path.join(pathToBuild, "index.html"));
});
app.listen(PORT, () => {
  console.log("Server is listening to the port ", PORT);
});
