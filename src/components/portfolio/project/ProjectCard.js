import React, { useState, useEffect } from "react";

import "../../../App.css";
import "./Project.css";

const ProjectCard = ({ project, display, animsTimer }) => {
    const [classStyle, setClassStyle] = useState("project-card");

    useEffect(() => {
        if (classStyle.length === 12 && display) {
            setClassStyle("project-card fade-in");
        }
    }, [classStyle, display])

    return <div className={classStyle} style={{ animationDelay: `${animsTimer}ms` }}>
        <span className="h5">{project.title}</span>
    </div>
}

export default ProjectCard;