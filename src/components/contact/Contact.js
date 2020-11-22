import React, { forwardRef, useEffect, useState, useRef } from "react";

import "../../App.css";
import "./Contact.css";

import { PageHeader } from "../";
import { useWindowDimensions } from "../../hooks";

import {
  ResumePDF,
  ResumeIcon,
  EmailIcon,
  LinkedInIcon,
  GithubIcon,
} from "../../store";

const NUM_OF_CONTACTS = 4;

const Contact = forwardRef(({ isVisible, breakpoint }, ref) => {
  const [surfaceAnims, setSurfaceAnims] = useState(
    new Array(NUM_OF_CONTACTS).fill(false)
  );
  const surfaceAnimsRef = useRef([...surfaceAnims]);
  const surfaceAnimsIndex = useRef(0);
  const previouslyLoaded = useRef(false);

  const windowSize = useWindowDimensions();

  useEffect(() => {
    if (!previouslyLoaded.current && isVisible) {
      previouslyLoaded.current = true;
      const animsInterval = setInterval(() => {
        surfaceAnimsRef.current[surfaceAnimsIndex.current++] = true;
        setSurfaceAnims([...surfaceAnimsRef.current]);

        if (surfaceAnimsIndex.current >= NUM_OF_CONTACTS) {
          clearInterval(animsInterval);
        }
      }, 200);
    }
  }, [isVisible, surfaceAnims]);

  const handleOnClickResume = (e) => {
    e.preventDefault();
    if (ResumePDF) {
      window.open(ResumePDF);
    }
  };

  const handleOnClickEmail = (e) => {
    e.preventDefault();
    window.open("mailTo:Dale.Seen@gmail.com");
  };

  const handleOnClickLinkedIn = (e) => {
    e.preventDefault();
    window.open("https://www.linkedin.com/in/dalecs");
  };

  const handleOnClickGithub = (e) => {
    e.preventDefault();
    window.open("https://github.com/dalecs");
  };

  return (
    <div
      className="section contact-bkg"
      style={{ minHeight: windowSize.height }}
      ref={ref}
    >
      <PageHeader isVisible={true} delay={0} breakpoint={breakpoint}>
        contact.
      </PageHeader>
      <div className={`contact-outer-container--${breakpoint}`}>
        <div
          title="My Resume"
          onClick={handleOnClickResume}
          className={`resume-surface ${
            surfaceAnims[0] ? "contact-surface-appear" : ""
          }`}
        >
          <img
            src={ResumeIcon}
            className={`icon--${breakpoint}`}
            alt="My Resume"
          />
          <span className={`surface-text--${breakpoint}`}>My Resume</span>
          <span className={`surface-text--${breakpoint}`}>(.pdf, ~137KB)</span>
        </div>
        <div
          title="mailTo: Dale.Seen@gmail.com"
          onClick={handleOnClickEmail}
          className={`other-contact-surface ${
            surfaceAnims[1] ? "contact-surface-appear" : ""
          }`}
        >
          <img src={EmailIcon} className={`icon--${breakpoint}`} alt="Email" />
          <span className={`surface-text--${breakpoint}`}>Email</span>
        </div>
        <div
          title="My LinkedIn"
          onClick={handleOnClickLinkedIn}
          className={`other-contact-surface ${
            surfaceAnims[2] ? "contact-surface-appear" : ""
          }`}
        >
          <img
            src={LinkedInIcon}
            className={`icon--${breakpoint}`}
            alt="LinkedIn"
          />
          <span className={`surface-text--${breakpoint}`}>LinkedIn</span>
        </div>
        <div
          title="My Github"
          onClick={handleOnClickGithub}
          className={`other-contact-surface ${
            surfaceAnims[3] ? "contact-surface-appear" : ""
          }`}
        >
          <img
            src={GithubIcon}
            className={`icon--${breakpoint}`}
            alt="Github"
          />
          <span className={`surface-text--${breakpoint}`}>Github</span>
        </div>
      </div>
    </div>
  );
});

export default Contact;
