import React from "react";

import "../../App.css";
import "./PageHeader.css";

import TextAnimation from "./TextAnimation";

const PageHeader = ({ isVisible, delay, children, breakpoint }) => {
  return (
    <div className="page-header">
      <div className="page-header-text-rotate">
        <TextAnimation
          isVisible={isVisible}
          delay={delay}
          className={`page-header-text ${breakpoint}`}
        >
          {children}
        </TextAnimation>
      </div>
    </div>
  );
};

export default PageHeader;
