import React, { forwardRef } from "react";
import "../../App.css";
import "./About.css";

import { useWindowDimensions } from "../../hooks";

const About = forwardRef((props, ref) => {
    const windowSize = useWindowDimensions();

    return (
        <div className="section about-bkg" style={{ height: windowSize.height }} ref={ref}>
            <div className="text">
                <span className="h3 mb-8">Hello. My name is Dale.</span>
                <span className="h5 mb-8">I am an aspiring front-end developer currently based in the Bay Area.</span>
                <span className="body1">I enjoy learning new technologies and will take on new opportunities that will allow me to grow as a Software Engineer.</span>
            </div>
        </div>
    );
});

export default About;