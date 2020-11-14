import React, {
  Fragment,
  useState,
  useRef,
  forwardRef,
  useEffect,
} from "react";

import "../../App.css";
import "./Portfolio.css";

import { TextAnimation, PageHeader } from "../";
import { useWindowDimensions } from "../../hooks";

import { projects, ExternalLinkIcon, SourceCodeIcon } from "../../store";

const ProjectCard = ({ display, className, project }) => {
  let urlLinkMarkup = <Fragment />,
    githubLinkMarkup = <Fragment />;

  if (project.deployed) {
    const handleOnClickURL = (e) => {
      e.preventDefault();
      window.open(project.url);
    };
    urlLinkMarkup = (
      <img
        src={ExternalLinkIcon}
        className={`project-card-link ${project.private ? "" : "mr-4"}`}
        onClick={handleOnClickURL}
        alt="URL"
      />
    );
  }
  if (!project.private) {
    const handleOnClickSource = (e) => {
      e.preventDefault();
      window.open(project.githubURL);
    };
    githubLinkMarkup = (
      <img
        src={SourceCodeIcon}
        className="project-card-link"
        onClick={handleOnClickSource}
        alt="Source Code"
      />
    );
  }

  return (
    <div
      className={`project-card ${className} ${
        display ? "project-card-anims" : ""
      }`}
    >
      <div className="project-card-links-container">
        {urlLinkMarkup}
        {githubLinkMarkup}
      </div>
      <div className="project-card-header">
        <span className="project-card-title">{`${project.title},`}</span>
        <span className="project-card-date">{project.date}</span>
      </div>
      <span className="project-card-description">{project.description}</span>
    </div>
  );
};

const Portfolio = forwardRef(({ isVisible, breakpoint }, ref) => {
  const [projectCardAnimsArr, setProjectCardAnimsArr] = useState(
    new Array(projects.length).fill(false)
  );
  const projectCardAnimsArrRef = useRef([...projectCardAnimsArr]);
  const projectCardAnimsArrIndex = useRef(0);
  const previouslyLoaded = useRef(false);

  useEffect(() => {
    if (isVisible && !previouslyLoaded.current) {
      previouslyLoaded.current = true;
      setTimeout(() => {
        const loadAnimsInterval = setInterval(() => {
          if (projectCardAnimsArrIndex.current < projectCardAnimsArr.length) {
            projectCardAnimsArrRef.current[
              projectCardAnimsArrIndex.current++
            ] = true;
            setProjectCardAnimsArr([...projectCardAnimsArrRef.current]);
          } else {
            clearInterval(loadAnimsInterval);
          }
        }, 100);
      }, 250);
    }
  }, [isVisible, projectCardAnimsArr]);

  const windowSize = useWindowDimensions();

  const handleOnClickGithub = (e) => {
    e.preventDefault();
    window.open("https://github.com/dalecs");
  };

  const projectsMarkup = projects.map((project, index) => {
    return (
      <ProjectCard
        className=""
        display={projectCardAnimsArr[index]}
        project={project}
        key={project.key}
      />
    );
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
      <TextAnimation
        isVisible={isVisible}
        delay={1050}
        className="github-link"
        onClick={handleOnClickGithub}
      >
        ... more in my Github
      </TextAnimation>
    </div>
  );
});

export default Portfolio;
