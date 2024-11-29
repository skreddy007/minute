require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


// Connect to MongoDB (local or Atlas)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((err) => console.error("MongoDB connection error:", err));

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
  });
  
  const Post = mongoose.model("Post", postSchema);

  app.post("/posts", async (req, res) => {
    try {
      const post = new Post(req.body); 
      await post.save();
      res.status(201).send(post); 
    } catch (error) {
      res.status(500).send({ error: "Error saving the post" });
    }
  });
  
  // Get all posts
  app.get("/posts", async (req, res) => {
    try {
      const posts = await Post.find();
      res.send(posts);
    } catch (error) {
      res.status(500).send({ error: "Error fetching posts" });
    }
  });
  
  // Get a post by ID
  app.get("/posts/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).send({ error: "Post not found" });
      }
      res.send(post);
    } catch (error) {
      res.status(500).send({ error: "Error fetching the post" });
    }
  });
  
  // Start the server
  app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
  });