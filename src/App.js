import React, { useRef, Fragment } from 'react';
import './App.css';

import { About, Portfolio, Contact } from "./components";
import { useScrollTrigger, useBreakpoints } from './hooks';

const App = () => {
  const aboutRef = useRef(null); // Holds the main div element in the About component
  const portfolioRef = useRef(null); // Holds the main div element in the Portfolio component
  const contactRef = useRef(null); // Holds the main div element in the Contact component

  const sectionsRef = useRef({ "aboutme": aboutRef, "portfolio": portfolioRef, "contact": contactRef });
  const visibilityObj = useScrollTrigger(sectionsRef.current);

  const breakpoint = useBreakpoints();

  const scrollTo = (section) => {
    switch (section) {
      case "aboutme":
      case "about me": {
        if (aboutRef.current) {
          aboutRef.current.scrollIntoView({
            behavior: "smooth"
          })
        }
        break;
      }
      case "portfolio": {
        if (portfolioRef.current) {
          portfolioRef.current.scrollIntoView({
            behavior: "smooth"
          })
        }
        break;
      }
      case "contact": {
        if (contactRef.current) {
          contactRef.current.scrollIntoView({
            behavior: "smooth"
          })
        }
        break;
      }
      default: { }
    }
  }

  return (
    <Fragment>
      <About ref={aboutRef} isVisible={visibilityObj["aboutme"]} scrollTo={scrollTo} breakpoint={breakpoint} />
      <Portfolio ref={portfolioRef} isVisible={visibilityObj["portfolio"]} breakpoint={breakpoint} />
      <Contact ref={contactRef} isVisible={visibilityObj["contact"]} breakpoint={breakpoint} />
    </Fragment>
  );
};

export default App;
