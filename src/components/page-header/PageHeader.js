import React, { useEffect, useState, useRef } from "react";

import "../../App.css";
import "./PageHeader.css";

const PageHeader = ({ children, delay, breakpoint }) => {
  const [sectionStr, setSectionStr] = useState("");
  const strRef = useRef("");
  const paddingRef = useRef("");
  const strIndexRef = useRef(0);

  useEffect(() => {
    const firstCallback = () => {
      const secondCallback = () => {
        const writingInterval = setInterval(() => {
          strRef.current += children[strIndexRef.current];
          paddingRef.current = paddingRef.current.substring(
            0,
            paddingRef.current.length - 1
          );
          strIndexRef.current = strIndexRef.current + 1;

          if (paddingRef.current.length <= 0) {
            clearInterval(writingInterval);
          }

          setSectionStr(`${strRef.current}${paddingRef.current}`);
        }, 100);

        const scramblingInterval = setInterval(() => {
          if (paddingRef.current.length <= 0) {
            clearInterval(scramblingInterval);
          } else {
            let padding = "";

            for (let i = 0; i < children.length - strIndexRef.current; i++) {
              padding += Math.floor(Math.random() * 10).toString();
            }
            paddingRef.current = padding;
            setSectionStr(`${strRef.current}${paddingRef.current}`);
          }
        }, 50);
      };

      const populateInterval = setInterval(() => {
        if (paddingRef.current.length >= children.length) {
          clearInterval(populateInterval);
          secondCallback();
        } else {
          paddingRef.current += Math.floor(Math.random() * 2).toString();
          setSectionStr(`${strRef.current}${paddingRef.current}`);
        }
      }, 10);
    };

    setTimeout(firstCallback, delay);
  }, [children, delay]);

  return (
    <div className="page-header">
      <div className="page-header-text-rotate">
        <span className={`page-header-text ${breakpoint}`}>{sectionStr}</span>
      </div>
    </div>
  );
};

export default PageHeader;
