import React, { forwardRef } from "react";

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

const ContactCard = ({ children, icon, redirectTo, isMain, breakpoint }) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    if (redirectTo && redirectTo.length > 0) {
      window.open(redirectTo);
    }
  };

  return (
    <div
      className={`contact-card ${isMain ? "main" : ""} ${breakpoint}`}
      onClick={handleOnClick}
    >
      <img src={icon} className="mb-8" alt="icon" />
      {children}
    </div>
  );
};

const Contact = forwardRef(({ isVisible, breakpoint }, ref) => {
  const windowSize = useWindowDimensions();

  return (
    <div
      className="section contact-bkg"
      style={{ minHeight: windowSize.height }}
      ref={ref}
    >
      <PageHeader>contact.</PageHeader>
      <div className={`contact-container ${breakpoint}`}>
        <ContactCard
          icon={ResumeIcon}
          redirectTo={ResumePDF}
          isMain={true}
          breakpoint={breakpoint}
        >
          <span>My Resume</span>
          <span>(.pdf, ~137KB)</span>
        </ContactCard>
        <div className={`other-contacts-container ${breakpoint}`}>
          <ContactCard
            icon={EmailIcon}
            redirectTo="mailTo:Dale.Seen@gmail.com"
            isMain={false}
            breakpoint={breakpoint}
          >
            Email
          </ContactCard>
          <ContactCard
            icon={LinkedInIcon}
            redirectTo="https://www.linkedin.com/in/dalecs"
            isMain={false}
            breakpoint={breakpoint}
          >
            LinkedIn
          </ContactCard>
          <ContactCard
            icon={GithubIcon}
            redirectTo="https://github.com/dalecs"
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
