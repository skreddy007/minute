import React, {useState} from "react";
import axios from "axios";
import '../styles/Home.css';


function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const userConfirmed = window.confirm(
      "Please confirm to share. Once submitted, it cannot be edited. Do you want to continue?"
    );

    if (!userConfirmed){
      return;
    }

    try {
      const newPost = { title, content };
      await axios.post("http://localhost:5000/posts", newPost);

      setTitle("");
      setContent("");
      setSuccessMessage("Minute post shared successfully!")
      
    } catch (error) {
      console.error("Error creating the Minute post:", error);
      alert("Failed to create the Minute post. Please try again.");
    }

    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  };

  return (
    <div className="container">

      <div className="description">
        <h2>Welcome to Minute, a platform where every moment counts.</h2> 
        <h4>Share a minute of your day — an inspiring story, a funny encounter, a thoughtful realization, 
          or anything that made your day happy. Celebrate life’s little joys and share with others.
        </h4> 
        <h4>Every minute has a story — what’s yours?</h4>
      </div>

      <div className="form-container">

        <h5>Write Your Minute</h5>

        <form onSubmit={handleSubmit}>

          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="title" style={{ display: "block", marginBottom: "5px" }}>
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="title"
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="content" style={{ display: "block", marginBottom: "5px" }}>
              Your Minute:
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="textarea"
              required
            />
          </div>

          <div className="btn-div">
            <button type="submit" className="submit-button">
              Share
            </button>
            {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          </div>
          
          
        </form>
      </div>
    </div>
  );
}

export default Home;
