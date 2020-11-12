import React, { forwardRef } from "react";

import "../../App.css";
import "./About.css";

import { PageHeader } from "../";
import { useWindowDimensions } from "../../hooks";

const About = forwardRef(({ isVisible, breakpoint }, ref) => {
  const windowSize = useWindowDimensions();

  return (
    <div
      className="section about-bkg"
      style={{ minHeight: windowSize.height }}
      ref={ref}
    >
      <PageHeader isVisible={isVisible} delay={500} breakpoint={breakpoint}>
        about me.
      </PageHeader>
      <div className="about-container">
        <span className="mb-32">
          As a recent grad, I have experience building intuitive and responsive
          UI for a variety of web pages ranging from regular static pages to
          interactive search w/ filter pages using modern frameworks such as
          React and Angular. I also have experience building RESTful APIs using
          Express.js and Spring Boot in order to power their corresponding
          front-end functionalities.
        </span>
        <span>
          I seek to dive deeper into the world of web development and will take
          on new opportunities that will allow me to grow as a software
          engineer.
        </span>
      </div>
    </div>
  );
});

export default About;
