import React, { useContext } from "react";

import "../Projects/Projects.css"

import CvProvider from "../../infoProvider/CvProvider";

export default function () {

    return (
        <>
            <div className="autoGrid">
                <CvProvider />
            </div>
        </>
    )

}