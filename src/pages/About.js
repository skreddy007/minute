import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Minute</h1>

      <p className="construction-message">
        🚧 This website is currently under construction. I’m learning the MERN stack while building it, and it's a solo project. Thank you for visiting! 🚀
      </p>

      <p className="about-description">
        Minute is a platform dedicated to capturing and sharing moments that matter. 
        Whether it’s a snippet of inspiration, a joyful memory, or a simple reflection, Minute allows you to document your thoughts and share them with others.
      </p>

      <h2>Features Built So Far</h2>
      
      <ul className="features-list">
        <li>
          <strong>Post Creation:</strong> Share your thoughts with others by creating posts with a title and content.
        </li>
        <li>
          <strong>Search Functionality:</strong> Search for posts using their titles to quickly find what you’re looking for.
        </li>
        <li>
          <strong>Pagination:</strong> View only 4 posts per page which maintains user friendly, clean and consistent layout.
        </li>
        <li>
          <strong>Dynamic Routing:</strong> View individual posts with unique URLs for easy navigation.
        </li>
      </ul>

      <p className="about-description">
        This project has been an incredible learning experience, allowing me to apply what I’ve learned about the MERN stack and
         enhance my skills in building dynamic, full-stack web applications. Apologies for any mistakes!
      </p>

      <p className="about-description">
        Stay tuned as I continue to improve and add more features to the platform!
      </p>
    </div>
  );
}

export default About;
