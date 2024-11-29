import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-details">
        <p><strong>Name:</strong> Saikiran Reddy Ramacharla</p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:skr.ramacharla@gmail.com" className="contact-link">
            skr.ramacharla@gmail.com
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/skreddy007"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            github.com/skreddy007
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/kiran098/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            linkedin.com/in/kiran098/
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
