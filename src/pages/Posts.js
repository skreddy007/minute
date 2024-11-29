import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const postsPerPage = 4; // Number of posts per page

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/posts");
        setPosts(response.data);
        setFilteredPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
    setFilteredPosts(filtered);
    setCurrentPage(1); 
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="posts-container">
      <div className="search-container">
        <h1>Minute Posts</h1>
        <input
          type="text"
          placeholder="Search by Title..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      {currentPosts.length > 0 ? (
        currentPosts.map((post) => (
          <div key={post._id} className="post-div">
            <h2>{post.title}</h2>
            <div className="content-link">
              <p>
                {post.content.substring(0, 100)}...
                <Link to={`/post/${post._id}`} className="read-more-link">
                  Read More
                </Link>
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}

      {/* Pagination */}
      <div className="pagination">
        {Array.from({
          length: Math.ceil(filteredPosts.length / postsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            className={`page-button ${
              index + 1 === currentPage ? "active-page" : ""
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Posts;
