import React from "react";

import "../../App.css";
import "./PageHeader.css";

import TextAnimation from "./TextAnimation";

const PageHeader = ({ location, isVisible, delay, breakpoint, children }) => {
  let containerStyle;
  switch (location) {
    case "topLeft": {
      containerStyle = "header-container--top-left";
      break;
    }
    case "topRight": {
      containerStyle = "header-container--top-right";
      break;
    }
    case "bottomRight": {
      containerStyle = "header-container--bottom-right";
      break;
    }
    case "bottomLeft":
    default: {
      containerStyle = "header-container--bottom-left";
    }
  }

  return (
    <div className={containerStyle}>
      <TextAnimation
        isVisible={isVisible}
        delay={delay ? delay : 250}
        className={`header--${breakpoint}`}
      >
        {children}
      </TextAnimation>
    </div>
  );
};

export default PageHeader;
