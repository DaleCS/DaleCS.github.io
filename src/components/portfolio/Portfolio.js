import React, { forwardRef } from "react";

import "../../App.css";
import "./Portfolio.css";

import { ProjectCard } from "../";
import { useWindowDimensions } from "../../hooks";

import { projects } from "../../store";

const Portfolio = forwardRef(({ isVisible }, ref) => {
    const windowSize = useWindowDimensions();

    const renderProjects = () => {
        if (isVisible) {
            let timeInc = 100;
            return projects.map(proj => {
                timeInc += 125;
                return <ProjectCard project={proj} display={isVisible} animsTimer={timeInc} key={proj.key} />
            });
        } else {
            return projects.map(proj => {
                return <ProjectCard project={proj} display={isVisible} animsTimer={0} key={proj.key} />
            })
        }
    }

    let projectsMarkup = renderProjects();

    return (
        <div className="section portfolio-bkg" style={{ minHeight: windowSize.height }} ref={ref}>
            <span className="h1">Portfolio</span>
            <div className="projects-container">
                {projectsMarkup}
            </div>
        </div >
    );
})

export default Portfolio;