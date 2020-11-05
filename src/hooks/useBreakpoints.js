import { useState, useEffect } from "react";

/**
 * Breakpoints screen width meaning
 * 1 = xs (extra small: <600px )
 * 2 = sm (small: 600px~959px)
 * 3 = md (medium: 960px~1279px)
 * 4 = lg (large: 1280px~1919px)
 * 5 = xl (extra large: >=1920px)
 */

const calculateCurrentBreakpoints = () => {
  const width = window.innerWidth;
  if (width < 960) {
    return "sm";
  } else if (width >= 960 && width < 1280) {
    return "md";
  } else {
    return "lg";
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
