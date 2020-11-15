import React, {
  Fragment,
  forwardRef,
  useState,
  useRef,
  useEffect,
} from "react";

import "../../App.css";
import "./Portfolio.css";

import { TextAnimation } from "../";

import { projects, ExternalLinkIcon, SourceCodeIcon } from "../../store";

const ProjectSlide = ({ project, isDisplayed, className, breakpoint }) => {
  let externalLink = <Fragment />,
    sourceLink = <Fragment />;

  if (project.url.length > 0) {
    const handleOnClickExternalLink = (e) => {
      e.preventDefault();
      window.open(project.url);
    };
    externalLink = (
      <img
        src={ExternalLinkIcon}
        className={`project-link ${
          project.githubURL.length > 0 ? "mr-16" : ""
        }`}
        onClick={handleOnClickExternalLink}
        alt="Link to project URL"
        title="Link to project URL"
      />
    );
  }
  if (project.githubURL.length > 0) {
    const handleOnClickSource = (e) => {
      e.preventDefault();
      window.open(project.githubURL);
    };
    sourceLink = (
      <img
        src={SourceCodeIcon}
        className="project-link"
        onClick={handleOnClickSource}
        alt="Link to source code (Github)"
        title="Link to source code (Github)"
      />
    );
  }

  return (
    <div
      className={`project-container ${className} ${breakpoint} ${
        isDisplayed ? "project-container-anim" : ""
      }`}
    >
      {project.hasImage ? (
        <img
          src={`./images/${project.key}.png`}
          className={`project-img ${breakpoint}`}
          alt={project.key}
          title={project.title}
        />
      ) : (
        <div className={`project-img ${breakpoint}`} />
      )}
      <div className="project-description-container">
        <div className="project-header mb-16">
          <span className="project-title mr-4">{`${project.title}, `}</span>
          <span className="project-date">{project.date}</span>
          <div className="project-links">
            {externalLink}
            {sourceLink}
          </div>
        </div>
        <span className="project-text mb-16">{project.description}</span>
        {project.abstract.length > 0 ? (
          <span className="project-text mb-16">{project.abstract}</span>
        ) : (
          <Fragment />
        )}
        <span className="project-text mb-16">{`Role: ${project.role}`}</span>
        <span className="project-text">{project.technologies}</span>
      </div>
    </div>
  );
};

const Portfolio = forwardRef(({ isVisible, breakpoint }, ref) => {
  const [projectSlidesAnimsArr, setProjectSlidesAnimsArr] = useState(
    new Array(projects.length).fill(false)
  );
  const projectSlidesAnimsArrRef = useRef([...projectSlidesAnimsArr]);
  const projectSlidesAnimsArrIndex = useRef(0);
  const previouslyLoaded = useRef(false);

  const handleOnClickGithub = (e) => {
    e.preventDefault();
    window.open("https://github.com/dalecs");
  };

  useEffect(() => {
    if (!previouslyLoaded.current && isVisible) {
      previouslyLoaded.current = true;
      const loadAnimsInterval = setInterval(() => {
        if (projectSlidesAnimsArrIndex.current < projects.length) {
          projectSlidesAnimsArrRef.current[
            projectSlidesAnimsArrIndex.current++
          ] = true;
          setProjectSlidesAnimsArr([...projectSlidesAnimsArrRef.current]);
        } else {
          clearInterval(loadAnimsInterval);
        }
      }, 200);
    }
  }, [isVisible]);

  let projectSlidesMarkup = projects.map((project, index) => {
    return (
      <ProjectSlide
        className="mb-48"
        project={project}
        isDisplayed={projectSlidesAnimsArr[index]}
        breakpoint={breakpoint}
        key={project.key}
      />
    );
  });

  return (
    <div className="section projects-bkg" ref={ref}>
      <TextAnimation
        className={`page-header-text ${breakpoint}`}
        isVisible={isVisible}
        delay={0}
      >
        projects.
      </TextAnimation>
      {projectSlidesMarkup}
      <span className="github-link" onClick={handleOnClickGithub}>
        ... more in my Github
      </span>
    </div>
  );
});

export default Portfolio;
