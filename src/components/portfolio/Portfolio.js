import React, { forwardRef } from "react";

import "../../App.css";
import "./Portfolio.css";

import { PageHeader } from "../";
import { useWindowDimensions } from "../../hooks";

const ProjectCard = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const Portfolio = forwardRef(({ isVisible, breakpoint }, ref) => {
  const windowSize = useWindowDimensions();

  const handleOnClickGithub = (e) => {
    e.preventDefault();
    window.open("https://github.com/dalecs");
  };

  return (
    <div
      className="section projects-bkg"
      style={{ minHeight: windowSize.height }}
      ref={ref}
    >
      <PageHeader isVisible={isVisible} delay={500} breakpoint={breakpoint}>
        projects.
      </PageHeader>
      <div className={`projects-container ${breakpoint}`}>
        <ProjectCard className={`project-card ${breakpoint}`}>
          Degreeinsight.io
        </ProjectCard>
        <ProjectCard className={`project-card ${breakpoint}`}>
          Abode.city
        </ProjectCard>
        <ProjectCard className={`project-card ${breakpoint}`}>
          Spartanstop.com
        </ProjectCard>
        <ProjectCard className={`project-card ${breakpoint}`}>
          Spartan Agenda
        </ProjectCard>
        <ProjectCard className={`project-card ${breakpoint}`}>
          Byte Drive
        </ProjectCard>
        <ProjectCard className={`project-card ${breakpoint}`}>
          Text Encryptor/Decryptor
        </ProjectCard>
      </div>
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
