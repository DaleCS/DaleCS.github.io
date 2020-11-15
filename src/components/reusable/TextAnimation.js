import React, { useEffect, useState, useRef } from "react";

import "../../App.css";
import "./TextAnimation.css";

const TextAnimation = ({ isVisible, delay, className, onClick, children }) => {
  const [text, setText] = useState("");
  const textRef = useRef("");
  const paddingRef = useRef("");

  const previouslyLoaded = useRef(false);

  const elRef = useRef(null);

  useEffect(() => {
    const initialCallback = () => {
      const initialPaddingInterval = setInterval(() => {
        if (paddingRef.current.length < children.length) {
          let paddingText = "";
          for (let i = 0; i < paddingRef.current.length + 1; i++) {
            paddingText += Math.floor(Math.random() * 2);
          }
          paddingRef.current = paddingText;
          setText(paddingRef.current);
        } else {
          clearInterval(initialPaddingInterval);
          const writingInterval = setInterval(() => {
            if (textRef.current.length < children.length) {
              textRef.current += children[textRef.current.length];
              paddingRef.current = paddingRef.current.substring(
                0,
                paddingRef.current.length - 1
              );
              setText(`${textRef.current}${paddingRef.current}`);
            } else {
              clearInterval(writingInterval);
            }
          }, 30);
          const scramblingInterval = setInterval(() => {
            if (paddingRef.current.length > 0) {
              let paddingText = "";
              for (let i = 0; i < paddingRef.current.length; i++) {
                paddingText += Math.floor(Math.random() * 2);
              }
              paddingRef.current = paddingText;
              setText(`${textRef.current}${paddingRef.current}`);
            } else {
              clearInterval(scramblingInterval);
            }
          }, 10);
        }
      }, 10);
    };

    if (!previouslyLoaded.current && isVisible) {
      previouslyLoaded.current = true;
      setTimeout(initialCallback, delay ? delay : 0);
      setText("");
    }
  }, [isVisible, delay, children]);

  return (
    <div ref={elRef} className="container" onClick={onClick}>
      <span className={className} style={{ width: `${children.length}ch` }}>
        {text}
      </span>
    </div>
  );
};

export default TextAnimation;
