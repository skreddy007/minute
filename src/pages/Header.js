import React from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css';

function Header(){
    return(
        <header className="header">
            <div className="logo">
                <h1>Minute</h1>
                <p>"Share Your Daily Moments That Matter"</p>
            </div>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;