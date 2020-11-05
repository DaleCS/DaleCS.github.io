import React, { forwardRef } from "react";

import "../../App.css";
import "./Portfolio.css";

import { PageHeader } from "../";
import { useWindowDimensions } from "../../hooks";

// import { projects } from "../../store";

const ProjectCard = ({ project, breakpoint }) => {
  return (
    <div className={`project-card ${breakpoint}`}>
      <span className="h5">{project}</span>
    </div>
  );
};

const Portfolio = forwardRef(({ isVisible, breakpoint }, ref) => {
  const windowSize = useWindowDimensions();

  const handleOnGithubClick = (e) => {
    e.preventDefault();
    window.open("https://github.com/dalecs");
  };

  return (
    <div
      className="section projects-bkg"
      style={{ minHeight: windowSize.height }}
      ref={ref}
    >
      <PageHeader>projects.</PageHeader>
      <div className={`projects-container ${breakpoint}`}>
        <ProjectCard project="Degreeinsight.io" breakpoint={breakpoint} />
        <ProjectCard project="Abode.city" breakpoint={breakpoint} />
        <ProjectCard project="Spartanstop.com" breakpoint={breakpoint} />
        <ProjectCard project="Spartan Agenda" breakpoint={breakpoint} />
        <ProjectCard project="Byte Drive" breakpoint={breakpoint} />
        <ProjectCard
          project="Text Encryptor/Decryptor"
          breakpoint={breakpoint}
        />
      </div>
      <span>
        ... more in my{" "}
        <span className="github-link" onClick={handleOnGithubClick}>
          Github
        </span>
      </span>
    </div>
  );
});

export default Portfolio;
