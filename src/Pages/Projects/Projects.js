import React, { useContext } from "react";

import "./Projects.css"

import ProjectsProvider from "../../infoProvider/ProjectsProvider";

export default function () {

    return (
        <>
            <div className="autoGrid">
                <ProjectsProvider />
            </div>
        </>
    )

}