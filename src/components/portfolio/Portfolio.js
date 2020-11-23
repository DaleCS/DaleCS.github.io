import React, { forwardRef } from "react";

import "../../App.css";
import "./Portfolio.css";

import { projects } from "../../store/";

import { TextAnimation } from "../";

import { useWindowDimensions } from "../../hooks";

const Portfolio = forwardRef(({ isVisible, breakpoint }, ref) => {
  const windowSize = useWindowDimensions();

  const outerStyle =
    breakpoint === "md" || breakpoint === "lg" || breakpoint === "xl"
      ? { height: windowSize.height }
      : { minHeight: windowSize.height };

  return (
    <div style={outerStyle} className="section projects border1" ref={ref}>
      <div className="overview">
        <div className="overview__text">
          <div className="overview__text__header">
            <span className="h4">{projects[0].title}</span>
          </div>
          <span className="subtitle1 italic">{projects[0].date}</span>
          <span className="body1">{projects[0].description}</span>
          <span className="body1">{projects[0].abstract}</span>
          <span className="body1">Role: {projects[0].role}</span>
          <span className="body1">
            Technologies: {projects[0].technologies}
          </span>
        </div>
        <div className="overview__surface" />
      </div>
      <div className="project-image" />
    </div>
  );
});

export default Portfolio;
