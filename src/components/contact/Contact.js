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

const ContactCard = ({
  icon,
  redirectTo,
  title,
  isMain,
  display,
  children,
  breakpoint,
}) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    if (redirectTo && redirectTo.length > 0) {
      window.open(redirectTo);
    }
  };

  return (
    <div
      className={`contact-card ${isMain ? "main" : ""} ${
        display ? "contact-card-anim" : ""
      } ${breakpoint}`}
      onClick={handleOnClick}
      title={title}
    >
      <img src={icon} className="mb-8" alt="icon" />
      {children}
    </div>
  );
};

const Contact = forwardRef(({ isVisible, breakpoint }, ref) => {
  const windowSize = useWindowDimensions();
  const [contactCardAnimsArr, setContactCardAnimsArr] = useState(
    new Array(4).fill(false)
  );
  const contactCardAnimsArrRef = useRef([...contactCardAnimsArr]);
  const contactCardAnimsArrIndex = useRef(0);
  const previouslyLoaded = useRef(false);

  useEffect(() => {
    if (!previouslyLoaded.current && isVisible) {
      previouslyLoaded.current = true;
      const loadAnimsInterval = setInterval(() => {
        if (contactCardAnimsArrIndex.current < contactCardAnimsArr.length) {
          contactCardAnimsArrRef.current[
            contactCardAnimsArrIndex.current++
          ] = true;
          setContactCardAnimsArr([...contactCardAnimsArrRef.current]);
        } else {
          clearInterval(loadAnimsInterval);
        }
      }, 200);
    }
  }, [isVisible, contactCardAnimsArr]);

  return (
    <div
      className="section contact-bkg"
      style={{ minHeight: windowSize.height }}
      ref={ref}
    >
      <PageHeader isVisible={isVisible} delay={0} breakpoint={breakpoint}>
        contact.
      </PageHeader>
      <div className={`contact-container ${breakpoint}`}>
        <ContactCard
          display={contactCardAnimsArr[0]}
          icon={ResumeIcon}
          redirectTo={ResumePDF}
          title="My Resume"
          isMain={true}
          breakpoint={breakpoint}
        >
          <span>My Resume</span>
          <span>(.pdf, ~137KB)</span>
        </ContactCard>
        <div className={`other-contacts-container ${breakpoint}`}>
          <ContactCard
            display={contactCardAnimsArr[1]}
            icon={EmailIcon}
            redirectTo="mailTo:Dale.Seen@gmail.com"
            title="mailTo: Dale.Seen@gmail.com"
            isMain={false}
            breakpoint={breakpoint}
          >
            Email
          </ContactCard>
          <ContactCard
            display={contactCardAnimsArr[2]}
            icon={LinkedInIcon}
            redirectTo="https://www.linkedin.com/in/dalecs"
            title="My LinkedIn Profile"
            isMain={false}
            breakpoint={breakpoint}
          >
            LinkedIn
          </ContactCard>
          <ContactCard
            display={contactCardAnimsArr[3]}
            icon={GithubIcon}
            redirectTo="https://github.com/dalecs"
            title="My Github"
            isMain={false}
            breakpoint={breakpoint}
          >
            Github
          </ContactCard>
        </div>
      </div>
    </div>
  );
});

export default Contact;
