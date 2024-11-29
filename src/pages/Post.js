import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Post.css"

function Post() {
  const { id } = useParams(); 
  const [post, setPost] = useState(null); 
  const [loading, setLoading] = useState(true); 

  // Fetch the post by ID from the backend
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/posts/${id}`);
        setPost(response.data); 
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching the post:", error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div className="post-container">
      {loading ? (
        <p>Loading...</p>
      ) : post ? (
        <div className="post-div">
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ) : (
        <p>Post not found.</p>
      )}
    </div>
  );
}

export default Post;
