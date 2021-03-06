import React, { forwardRef } from "react";
import "../../App.css";
import "./Intro.css";

import { PageHeader } from "../";
import { useWindowDimensions } from "../../hooks";

const Intro = forwardRef(({ isVisible, breakpoint }, ref) => {
  const windowSize = useWindowDimensions();

  return (
    <div
      className="section intro-bkg"
      style={{ minHeight: windowSize.height }}
      ref={ref}
    >
      <PageHeader
        location="bottomLeft"
        isVisible={isVisible}
        delay={3500}
        breakpoint={breakpoint}
      >
        hello.
      </PageHeader>
      <div className={`intro-container ${breakpoint}`}>
        <span className="intro-container-text-line-1">
          Hello there! I'm{" "}
          <span className="underlined">Dale Christian Seen</span>.
        </span>
        <span className="intro-container-text-line-2">
          I'm an aspiring <span className="clr-blue">Front-End Developer</span>.
        </span>
        <div className="intro-container-borderanim" />
      </div>
    </div>
  );
});

export default Intro;
