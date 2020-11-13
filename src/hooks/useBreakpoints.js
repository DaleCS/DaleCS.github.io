import { useState, useEffect } from "react";

const calculateCurrentBreakpoints = () => {
  const width = window.innerWidth;
  if (width < 600) {
    return "xs";
  } else if (width >= 600 && width < 960) {
    return "sm";
  } else if (width >= 960 && width < 1280) {
    return "md";
  } else if (width >= 1280 && width < 1920) {
    return "lg";
  } else {
    return "xl";
  }
};

const useBreakpoints = () => {
  const [breakpoint, setBreakpoint] = useState(calculateCurrentBreakpoints());

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(calculateCurrentBreakpoints());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoint;
};

export default useBreakpoints;
