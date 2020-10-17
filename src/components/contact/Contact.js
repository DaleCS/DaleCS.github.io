import React, { forwardRef } from "react";

import "../../App.css";
import "./Contact.css";

import { useWindowDimensions } from "../../hooks";

const Contact = forwardRef((props, ref) => {
    const windowSize = useWindowDimensions();

    return (
        <div className="section contact-bkg" style={{ height: windowSize.height }} ref={ref}>
            <span className="h1">Contact</span>
        </div>
    );
})

export default Contact;