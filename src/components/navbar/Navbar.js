import React, { forwardRef } from "react";

import "../../App.css";
import "./Navbar.css";

import { TextAnimation } from "../";

const Navbar = forwardRef(({ scrollTo, breakpoint }, ref) => {
  const handleHelloOnClick = (e) => {
    e.preventDefault();
    scrollTo(e.target.innerHTML);
  };

  return (
    <div ref={ref} className="navbar">
      <TextAnimation
        isVisible={true}
        className="navbar-selection mr-8"
        delay={3500}
        onClick={handleHelloOnClick}
      >
        DaleCS
      </TextAnimation>
      <TextAnimation
        isVisible={true}
        className="navbar-selection mr-8"
        delay={3600}
        onClick={handleHelloOnClick}
      >
        about me
      </TextAnimation>
      <TextAnimation
        isVisible={true}
        className="navbar-selection mr-8"
        delay={3700}
        onClick={handleHelloOnClick}
      >
        projects
      </TextAnimation>
      <TextAnimation
        isVisible={true}
        className="navbar-selection"
        delay={3800}
        onClick={handleHelloOnClick}
      >
        contact
      </TextAnimation>
    </div>
  );
});

export default Navbar;
