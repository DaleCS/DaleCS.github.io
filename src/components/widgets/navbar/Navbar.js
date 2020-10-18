import React from "react";

import "../../../App.css";
import "./Navbar.css";

const Navbar = ({ className, scrollTo }) => {
    const handleClick = (e) => {
        e.preventDefault();

        if (e.target.innerHTML) {
            scrollTo(e.target.innerHTML);
        }
    }

    return (
        <div className={`navbar-container ${className}`}>
            <span className="navbar-selection mr-48" style={{ animationDelay: "6325ms" }} onClick={handleClick}>about me</span>
            <span className="navbar-selection mr-48" style={{ animationDelay: "6325ms" }} onClick={handleClick}>portfolio</span>
            <span className="navbar-selection" style={{ animationDelay: "6325ms" }} onClick={handleClick}>contact</span>
            <div className="navbar-div-anims" />
        </div>
    );
}

export default Navbar;