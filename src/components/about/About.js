import React, { useRef } from "react";
import "../../App.css";
import "./About.css";

import { useScrollTriggerLevel, useWindowDimensions } from "../../hooks";

const About = () => {
    const scrollTriggerLevel = useScrollTriggerLevel();
    const windowSize = useWindowDimensions();

    const textRef = useRef(null);

    return (
        <div className="section" style={{ height: windowSize.height }}>
            <span
                className={`invisible ${textRef.current && scrollTriggerLevel >= textRef.current.offsetTop ? "fade-in" : ""}`}
                ref={textRef}>
                {scrollTriggerLevel}
            </span>
        </div>
    );
}

export default About;