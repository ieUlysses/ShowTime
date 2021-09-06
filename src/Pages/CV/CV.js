import React, { useContext } from "react";


import "../Projects/Projects.css"

import { Context } from "../../Context/Context";

import Card from "../../Componants/Card/Card"
import { Container, Row } from "react-bootstrap";

import ProjectsProvider from "../../infoProvider/ProjectsProvider";
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