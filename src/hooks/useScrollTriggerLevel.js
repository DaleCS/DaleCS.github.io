import { useState, useEffect } from "react";

const getLowerScrollTrigger = () => {
    return Math.floor(window.pageYOffset + window.innerHeight - (window.innerHeight / 8));
}

const useScrollTriggerLevel = () => {
    const [scrollTriggerLevel, setScrollTriggerLevel] = useState(getLowerScrollTrigger());

    useEffect(() => {
        const handleScroll = () => {
            setScrollTriggerLevel(getLowerScrollTrigger());
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return scrollTriggerLevel;
}

export default useScrollTriggerLevel;