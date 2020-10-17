import React, { useRef } from 'react';
import './App.css';

import { About, Portfolio, Contact, Navigator } from "./components";

const App = () => {
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (section) => {
    switch (section) {
      case "aboutme": {
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
    <React.Fragment>
      <Navigator scrollTo={scrollTo} />
      <About ref={aboutRef} />
      <Portfolio ref={portfolioRef} />
      <Contact ref={contactRef} />
    </React.Fragment>
  );
}

export default App;
