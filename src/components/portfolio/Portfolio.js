import React, { forwardRef, useEffect, useRef, useState } from "react";

import "../../App.css";
import "./Portfolio.css";

import { PageHeader } from "../";
import { useWindowDimensions } from "../../hooks";
import {
  projects,
  Next,
  Back,
  ExternalLinkIcon,
  SourceCodeIcon,
} from "../../store";
// import { projects, ExternalLinkIcon, SourceCodeIcon } from "../../store";

const Content = ({ project, transitionStatus, breakpoint }) => {
  const [descriptionHeight, setDescriptionHeight] = useState(0);
  const [expanded, setExpanded] = useState(
    breakpoint.localeCompare("xl") === 0 || breakpoint.localeCompare("lg") === 0
  );

  const descriptionEl = useRef(null);

  useEffect(() => {
    if (
      breakpoint.localeCompare("xl") !== 0 &&
      breakpoint.localeCompare("lg") !== 0
    ) {
      setExpanded(false);
    }
  }, [breakpoint]);

  useEffect(() => {
    if (
      breakpoint.localeCompare("xl") !== 0 &&
      breakpoint.localeCompare("lg") !== 0
    ) {
      setExpanded(false);
    }
    setDescriptionHeight(descriptionEl.current.getBoundingClientRect().height);
  }, [breakpoint, project.key]);

  const {
    key,
    title,
    date,
    description,
    abstract,
    role,
    technologies,
    hasImage,
    url,
    githubURL,
  } = project;

  let descAnims = "",
    imgAnims = "";
  switch (transitionStatus) {
    case "next-enter":
      descAnims = "fade-in-anims";
      imgAnims = "next-enter-anims";
      break;
    case "back-enter": {
      descAnims = "fade-in-anims";
      imgAnims = "back-enter-anims";
      break;
    }
    case "next-exit":
      descAnims = "fade-out-anims";
      imgAnims = "next-exit-anims";
      break;
    case "back-exit": {
      descAnims = "fade-out-anims";
      imgAnims = "back-exit-anims";
      break;
    }
    default: {
    }
  }

  const handleOnClickGithub = (e) => {
    e.preventDefault();
    if (githubURL && githubURL.length > 0) {
      window.open(githubURL);
    }
  };

  const handleOnClickURL = (e) => {
    e.preventDefault();
    if (url && url.length > 0) {
      window.open(url);
    }
  };

  const handleOnClickExpand = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <div className={`content-container--${breakpoint}`}>
      <div className={`project-img-container--${breakpoint} ${imgAnims}`}>
        {hasImage ? (
          <img
            src={`./images/${key}.png`}
            alt={key}
            className={`project-img--${breakpoint}`}
          />
        ) : (
          <div />
        )}
      </div>
      <div className={`content-description-container--${breakpoint}`}>
        <div
          style={{
            transform: `scaleY(${descriptionHeight}) translateY(-0.5px)`,
          }}
          className="content-surface"
        />
        <div
          ref={descriptionEl}
          className={`content-description--${breakpoint} ${descAnims}`}
        >
          <div className={`content-header mb-16`}>
            <span
              className={`content-title--${breakpoint} mr-4`}
            >{`${title},`}</span>
            <span className={`content-date--${breakpoint} mr-8`}>{date}</span>
            {url && url.length > 0 ? (
              <img
                src={ExternalLinkIcon}
                className={`content-link--${breakpoint} ${
                  githubURL && githubURL.length > 0 ? "mr-4" : ""
                }`}
                onClick={handleOnClickURL}
                alt="Link to project"
                title="Link to project (Github)"
              />
            ) : (
              <div />
            )}
            {githubURL && githubURL.length > 0 ? (
              <img
                src={SourceCodeIcon}
                className={`content-link--${breakpoint}`}
                onClick={handleOnClickGithub}
                alt="Link to source code"
                title="Link to source code (Github)"
              />
            ) : (
              <div />
            )}
          </div>
          <span className={`content-text--${breakpoint} mb-16`}>
            {description}
          </span>
          {expanded && abstract && abstract.length > 0 ? (
            <span className={`content-text--${breakpoint} mb-16`}>
              {abstract}
            </span>
          ) : (
            <div />
          )}
          <span
            className={`content-text--${breakpoint} mb-16`}
          >{`Role: ${role}`}</span>
          <span
            className={`content-text--${breakpoint} ${
              !expanded ? "mb-16" : ""
            }`}
          >
            {technologies}
          </span>
          {!expanded ? (
            <span
              onClick={handleOnClickExpand}
              className={`content-text--${breakpoint} content-expand`}
            >
              ...more info
            </span>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

const Stepper = ({
  displayedIndex,
  numOfProjects,
  callbacks: { onNext, onBack },
  className,
}) => {
  let stepperMarkup = [];
  for (let i = 0; i < numOfProjects; i++) {
    stepperMarkup.push(
      <div
        className={`dot--${
          i !== displayedIndex ? "not-displayed" : "displayed"
        } ${i < numOfProjects - 1 ? "mr-4" : "mr-16"}`}
      />
    );
  }

  return (
    <div className={`stepper-container ${className}`}>
      <img
        src={Back}
        className="stepper-btn mr-16"
        onClick={onBack}
        alt="back"
      />
      {stepperMarkup}
      <img src={Next} className="stepper-btn" onClick={onNext} alt="next" />
    </div>
  );
};

const Portfolio = forwardRef(({ isVisible, breakpoint }, ref) => {
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [transitionStatus, setTransitionStatus] = useState("");

  const previouslyLoaded = useRef(false);

  const windowSize = useWindowDimensions();

  useEffect(() => {
    if (!previouslyLoaded.current && isVisible) {
      previouslyLoaded.current = true;
      setTransitionStatus("next-enter");
    }
  }, [isVisible]);

  const handleOnClickNext = (e) => {
    e.preventDefault();
    setTransitionStatus("next-exit");
    setTimeout(() => {
      setTransitionStatus("next-enter");
      if (displayedIndex < projects.length - 1) {
        setDisplayedIndex(displayedIndex + 1);
      } else {
        setDisplayedIndex(0);
      }
    }, 100);
  };

  const handleOnClickBack = (e) => {
    e.preventDefault();
    setTransitionStatus("back-exit");
    setTimeout(() => {
      setTransitionStatus("back-enter");
      if (displayedIndex === 0) {
        setDisplayedIndex(projects.length - 1);
      } else {
        setDisplayedIndex(displayedIndex - 1);
      }
    }, 100);
  };

  return (
    <div
      style={{ minHeight: windowSize.height }}
      className="section projects-bkg"
      ref={ref}
    >
      <PageHeader isVisible={isVisible} delay={0} breakpoint={breakpoint}>
        projects.
      </PageHeader>
      <div
        style={{ height: windowSize.height * 0.8 }}
        className={`projects-container--${breakpoint}`}
      >
        <Content
          project={projects[displayedIndex]}
          transitionStatus={transitionStatus}
          breakpoint={breakpoint}
        ></Content>
      </div>
      <Stepper
        displayedIndex={displayedIndex}
        numOfProjects={projects.length}
        callbacks={{ onNext: handleOnClickNext, onBack: handleOnClickBack }}
      />
    </div>
  );
});

export default Portfolio;
