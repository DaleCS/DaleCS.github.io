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

  const outerStyle =
    breakpoint === "md" || breakpoint === "lg" || breakpoint === "xl"
      ? { height: windowSize.height }
      : { minHeight: windowSize.height };

  return (
    <div className="section about-bkg" style={outerStyle} ref={ref}>
      <div className={`about-container ${breakpoint}`}>
        <span className={`about-p1 ${showP1 ? "about-p-anims" : ""}`}>
          I am a recent grad from San Jose State University with my B.S. in
          Software Engineering. I mainly focus on front-end web development, but
          I don't shy away from back-end web and mobile development as I have
          experience in those roles from previous projects as well. I mainly use
          modern front-end frameworks such as React and Angular to build
          intuitive and responsive UI for a variety of web pages. I've also used
          back-end frameworks such as Express.js and Spring Boot to power
          corresponding front-end features using data from NoSQL or MySQL
          databases.
        </span>
        <span className={`about-p2 ${showP2 ? "about-p-anims" : ""}`}>
          I seek to dive deeper into the world of web development and will take
          on new opportunities that will allow me to grow as an engineer. I am
          open to front-end, back-end, or full-stack development positions.
        </span>
      </div>
      <PageHeader
        location="bottomLeft"
        isVisible={isVisible}
        breakpoint={breakpoint}
      >
        about me.
      </PageHeader>
    </div>
  );
});

export default About;
