import React, { useRef, useState, useEffect, forwardRef } from "react";
import "../../App.css";
import "./About.css";

import { useWindowDimensions } from "../../hooks";

const Navbar = ({ className, breakpoint, scrollTo }) => {
    const handleClick = (e) => {
        e.preventDefault();
        scrollTo(e.target.innerHTML);
    }

    return (
        <div className={`${className} navbar-container ${breakpoint <= 2 ? "sm" : ""}`}>
            <div className={`navbar ${breakpoint <= 2 ? "sm" : ""} `}>
                <span className="navbar-selection" onClick={handleClick}>about me</span>
                <span className="navbar-selection" onClick={handleClick}>portfolio</span>
                <span className="navbar-selection" onClick={handleClick}>contact</span>
            </div>
        </div>
    )
}

const Introduction = ({ className, breakpoint }) => {
    const [introBoxTransform, setIntroBoxTransform] = useState("translate(0px, 0px)");
    const introBoxRef = useRef(null);

    useEffect(() => {
        const dimensions = introBoxRef.current.getBoundingClientRect();
        const targetX = Math.floor(((window.innerWidth / 2) - (dimensions.width / 2)) - dimensions.x);
        const targetY = Math.floor(((window.innerHeight / 2) - (dimensions.height / 2)) - dimensions.y);
        setIntroBoxTransform(`translate(${targetX}px, ${targetY}px)`);
    }, []);


    return (
        <div className={`intro-container ${className} ${breakpoint <= 2 ? "sm" : ""}`} style={{ transform: introBoxTransform, animationDelay: "3000ms" }} ref={introBoxRef}>
            <span>Hello there!</span>
            <span>I'm <span className="name">Dale Christian Seen</span>.</span>
            <span>I'm an aspiring <span className="frontenddev">front-end developer</span>.</span>
            <div className="intro-container-anims" />
        </div>
    );
}

const About = forwardRef(({ scrollTo, breakpoint }, ref) => {
    const windowSize = useWindowDimensions();

    return (
        <div className="section about-bkg" style={{ minHeight: windowSize.height }} ref={ref}>
            <Navbar breakpoint={breakpoint} scrollTo={scrollTo} />
            <div className={`inner-section-container ${breakpoint <= 2 ? "sm" : ""} `}>
                <div className={breakpoint > 2 ? "not-display" : "img-container sm"}>
                    <img className="img" src="./me.jpg" alt="placeholder" />
                </div>
                <div className={`text-container ${breakpoint <= 2 ? "sm" : ""} `}>
                    <Introduction className="mb-8" breakpoint={breakpoint} />
                    <div className={`description-container ${breakpoint <= 2 ? "sm" : ""} `}>
                        <p className="mb-8">
                            I have experience building intuitive and responsive UI for a variety of web pages ranging from regular static pages to interactive search w/ filter pages
                            using modern frameworks such as React and Angular. I also have experience building RESTful APIs using ExpressJS and Spring Boot in order to power their corresponding front-end functionalities.
                        </p>
                        <p>
                            I seek to learn new technologies and will take on opportunities that will allow me to grow as a software engineer.
                        </p>
                    </div>
                </div>
                <div className={breakpoint > 2 ? "img-container" : "not-display"}>
                    <img className="img" src="./me.jpg" alt="placeholder" />
                </div>
            </div >
        </div >
    )
});

export default About;