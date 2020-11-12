import { useRef, useState, useEffect } from "react";

const useScrollTrigger = (sectionsRef) => {
  const [visibilityObj, setVisibilityObj] = useState({});
  const visibilityObjRef = useRef(visibilityObj);

  useEffect(() => {
    let dummyVisibilityObj = {};
    Object.keys(sectionsRef).forEach((key) => {
      dummyVisibilityObj[key] = false;
    });

    visibilityObjRef.current = { ...dummyVisibilityObj };
    setVisibilityObj({ ...dummyVisibilityObj });

    const handleScroll = () => {
      Object.keys(sectionsRef).forEach((key) => {
        const { height, top, bottom } = sectionsRef[
          key
        ].current.getBoundingClientRect();
        if (
          top <= height - window.innerHeight / 8 &&
          bottom >= window.innerHeight / 8
        ) {
          if (!visibilityObjRef.current[key]) {
            visibilityObjRef.current[key] = true;
            setVisibilityObj({
              ...visibilityObjRef.current,
              [key]: true,
            });
          }
        } else if (visibilityObjRef.current[key]) {
          visibilityObjRef.current[key] = false;
          setVisibilityObj({
            ...visibilityObjRef.current,
            [key]: false,
          });
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionsRef]);

  return visibilityObj;
};

export default useScrollTrigger;
