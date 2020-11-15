import React, { useEffect, useState, useRef, forwardRef } from "react";

import "../../App.css";
import "./About.css";

import { PageHeader } from "../";
import { useWindowDimensions } from "../../hooks";

const About = forwardRef(({ isVisible, breakpoint }, ref) => {
  const windowSize = useWindowDimensions();

  const [showP1, setShowP1] = useState(false);
  const [showP2, setShowP2] = useState(false);
  const previouslyShown = useRef(false);

  useEffect(() => {
    if (!previouslyShown.current && isVisible) {
      previouslyShown.current = true;
      setShowP1(true);
      setTimeout(() => {
        setShowP2(true);
      }, 250);
    }
  }, [isVisible]);

  return (
    <div
      className="section about-bkg"
      style={{ minHeight: windowSize.height }}
      ref={ref}
    >
      <PageHeader isVisible={isVisible} delay={0} breakpoint={breakpoint}>
        about me.
      </PageHeader>
      <div className={`about-container ${breakpoint}`}>
        <span className={`about-p1 ${showP1 ? "about-p-anims" : ""}`}>
          As a recent grad, I have experience building intuitive and responsive
          UI for a variety of web pages ranging from regular static pages to
          interactive search w/ filter pages using modern frameworks such as
          React and Angular. I also have experience building RESTful APIs using
          Express.js and Spring Boot in order to power their corresponding
          front-end functionalities.
        </span>
        <span className={`about-p2 ${showP2 ? "about-p-anims" : ""}`}>
          I seek to dive deeper into the world of web development and will take
          on new opportunities that will allow me to grow as a software
          engineer.
        </span>
      </div>
    </div>
  );
});

export default About;
