import React, { useState, useRef, useEffect } from "react";


const TypingEffect = ({ className, speed, delay, children }) => {
    const [initialOpacity, setInitialOpacity] = useState(0);
    const [displayedStr, setDisplayedStr] = useState(children);
    const [finalSpanDimensions, setFinalSpanDimensions] = useState({});

    const displayedStrRef = useRef("");
    const fullStrRef = useRef("");

    const finalSpanEl = useRef(null);

    useEffect(() => {
        setFinalSpanDimensions({
            width: Math.floor(finalSpanEl.current.getBoundingClientRect().width),
            height: Math.floor(finalSpanEl.current.getBoundingClientRect().height)
        });

        fullStrRef.current = children;

        let typingInterval;
        setTimeout(() => {
            let start;
            let typing = (timeStamp) => {
                if (start === undefined) {
                    start = timeStamp;
                }
                if (Math.floor(timeStamp - start) % (delay ? delay : 10) === 0) {
                    if (displayedStrRef.current.length < fullStrRef.current.length) {
                        displayedStrRef.current += fullStrRef.current[displayedStrRef.current.length];
                        setDisplayedStr(displayedStrRef.current);
                        window.requestAnimationFrame(typing);
                    } else {
                        setFinalSpanDimensions({})
                    }
                } else {
                    window.requestAnimationFrame(typing);
                }
            };

            window.requestAnimationFrame(typing);
        }, delay ? delay : 0)

        setDisplayedStr("");
        setInitialOpacity(1);

        return () => {
            clearInterval(typingInterval);
        }

    }, [speed, delay, children]);

    return <span className={className} ref={finalSpanEl} style={{ ...finalSpanDimensions, opacity: initialOpacity }}>{displayedStr}</span>
}

export default TypingEffect;