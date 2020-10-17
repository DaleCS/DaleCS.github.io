import React from "react";

import "../../App.css";
import "./Navigator.css";

const Navigator = ({ scrollTo }) => {

    const handleOnClick = (e) => {
        e.preventDefault();
        scrollTo(e.target.name);
    }

    return (
        <div className="nav-container">
            <div className="nav">
                <button className="nav-btn subtitle1" name="aboutme" onClick={handleOnClick}>About Me</button>
                <button className="nav-btn subtitle1" name="portfolio" onClick={handleOnClick}>Portfolio</button>
                <button className="nav-btn subtitle1" name="contact" onClick={handleOnClick}>Contact</button>
            </div>
        </div>
    )
}


export default Navigator;