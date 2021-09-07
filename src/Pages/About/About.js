import React, { useContext } from "react"
import "./About.css"


import { Context } from "../../Context/Context";

import { Container } from "react-bootstrap"

export default function (props) {
    const [context, setContext] = useContext(Context);
    return (
        <>
            <Container {...props} size="fluid centered" >
                <div className={`typewriter ${context}`}>
                    <h1 >
                        22 year old, full stack grad with a passion for troubleshooting
                    </h1>
                </div>
            </Container>
        </>

    )
}