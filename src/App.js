import React, { useRef, Fragment } from "react";
import "./App.css";

import { Navbar, Intro, About, Portfolio, Contact } from "./components";
import { useScrollTrigger, useBreakpoints } from "./hooks";

const App = () => {
  const introRef = useRef(null); // Holds the main div element in the Intro component
  const aboutRef = useRef(null); // Holds the main div element in the About component
  const portfolioRef = useRef(null); // Holds the main div element in the Portfolio component
  const contactRef = useRef(null); // Holds the main div element in the Contact component
  const navbarRef = useRef(null);

  const sectionsRef = useRef({
    intro: introRef,
    aboutme: aboutRef,
    portfolio: portfolioRef,
    contact: contactRef,
  });
  const visibilityObj = useScrollTrigger(sectionsRef.current);

  const breakpoint = useBreakpoints();

  const scrollTo = (section) => {
    switch (section.toLowerCase()) {
      case "dalecs":
      case "intro": {
        if (introRef.current) {
          introRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }
        break;
      }
      case "aboutme":
      case "about me": {
        if (aboutRef.current) {
          aboutRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }
        break;
      }
      case "projects": {
        if (portfolioRef.current) {
          window.scrollBy({
            left: 0,
            top:
              portfolioRef.current.getBoundingClientRect().y -
              navbarRef.current.getBoundingClientRect().height,
            behavior: "smooth",
          });
        }
        break;
      }
      case "contact": {
        if (contactRef.current) {
          contactRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }
        break;
      }
      default: {
      }
    }
  };

  return (
    <Fragment>
      <Navbar ref={navbarRef} scrollTo={scrollTo} breakpoint={breakpoint} />
      <Intro
        ref={introRef}
        isVisible={visibilityObj["intro"]}
        breakpoint={breakpoint}
      />
      <About
        ref={aboutRef}
        isVisible={visibilityObj["aboutme"]}
        breakpoint={breakpoint}
      />
      <Portfolio
        ref={portfolioRef}
        isVisible={visibilityObj["portfolio"]}
        breakpoint={breakpoint}
      />
      <Contact
        ref={contactRef}
        isVisible={visibilityObj["contact"]}
        breakpoint={breakpoint}
      />
    </Fragment>
  );
};

export default App;
