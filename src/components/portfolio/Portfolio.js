import React, { forwardRef } from "react";

import "../../App.css";
import "./Portfolio.css";

import { useWindowDimensions } from "../../hooks";

const Portfolio = forwardRef((props, ref) => {
    const windowSize = useWindowDimensions();

    return (
        <div className="section portfolio-bkg" style={{ height: windowSize.height }} ref={ref}>
            <span className="h1">Portfolio</span>
        </div>
    );
})

export default Portfolio;