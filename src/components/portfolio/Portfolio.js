import React, { forwardRef } from "react";

import "../../App.css";
import "./Portfolio.css";

import { TextAnimation, PageHeader } from "../";
import { useWindowDimensions } from "../../hooks";

import projects from "../../store/projects.json";

const ProjectCard = ({ className, project }) => {
  return (
    <div className={`project-card ${className}`}>
      <span className="project-card-title">
        {`${project.title}, `}
        <span className="project-card-date">{project.date}</span>
      </span>
      <span className="project-card-description">{project.description}</span>
    </div>
  );
};

const Portfolio = forwardRef(({ isVisible, breakpoint }, ref) => {
  const windowSize = useWindowDimensions();

  const handleOnClickGithub = (e) => {
    e.preventDefault();
    window.open("https://github.com/dalecs");
  };

  const projectsMarkup = projects.map((project) => {
    return <ProjectCard className="" project={project} />;
  });

  return (
    <div
      className="section projects-bkg"
      style={{ minHeight: windowSize.height }}
      ref={ref}
    >
      <PageHeader isVisible={isVisible} delay={500} breakpoint={breakpoint}>
        projects.
      </PageHeader>
      <div className={`projects-container ${breakpoint}`}>{projectsMarkup}</div>
      <span className="body1">
        ... more in my{" "}
        <span className="github-link" onClick={handleOnClickGithub}>
          Github
        </span>
      </span>
    </div>
  );
});

export default Portfolio;
