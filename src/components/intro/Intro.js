import React, { forwardRef } from "react";
import "../../App.css";
import "./Intro.css";

import { PageHeader } from "../";
import { useWindowDimensions } from "../../hooks";

const Navbar = ({ scrollTo }) => {
  const handleOnClick = (e) => {
    scrollTo(e.target.innerHTML);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <span
          className="navbar-selection selection-1 mr-32"
          onClick={handleOnClick}
        >
          hello
        </span>
        <span
          className="navbar-selection selection-2 mr-32"
          onClick={handleOnClick}
        >
          about me
        </span>
        <span
          className="navbar-selection selection-3 mr-32"
          onClick={handleOnClick}
        >
          projects
        </span>
        <span className="navbar-selection selection-4" onClick={handleOnClick}>
          contact
        </span>
      </div>
    </div>
  );
};

const Intro = forwardRef(({ scrollTo, breakpoint }, ref) => {
  const windowSize = useWindowDimensions();

  return (
    <div
      className="section intro-bkg"
      style={{ minHeight: windowSize.height }}
      ref={ref}
    >
      <Navbar scrollTo={scrollTo} />
      <PageHeader delay={3500}>hello.</PageHeader>
      <div className={`intro-container ${breakpoint}`}>
        <span className="intro-container-text-line-1">
          Hello there! I'm{" "}
          <span className="underlined">Dale Christian Seen</span>.
        </span>
        <span className="intro-container-text-line-2">
          I'm an aspiring <span className="clr-blue">front-end developer</span>.
        </span>
        <div className="intro-container-borderanim" />
      </div>
    </div>
  );
});

export default Intro;
