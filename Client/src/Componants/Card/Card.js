
import React, { useContext } from "react"
import { Card, Button, Image } from "react-bootstrap"

import { Context } from "../../Context/Context";

import IDev from "../../Media/IDev.svg"
import "./Card.css"



export default function (props) {

    const [context, setContext] = useContext(Context);

    let btnBg = null
    let cardBg = null
    let text = null
    let btnText = null

    if (context === "") {
        btnBg = "bg-dark"
        cardBg = "bg-light"
        text = "text-dark"
        btnText = "text-light"
    } else {
        btnBg = "bg-light"
        cardBg = "bg-dark"
        text = "text-light"
        btnText = "text-dark"
    }

    return (

        <>
            <div className="container cusCard">
                <Image src={IDev} className="cardCompImg" />
                <Card className="cardCompCard">
                    <Card.Body className={`CardCompBody rounded ${cardBg}`}>
                        <Card.Title className={`${text}`}> {props.Title}</Card.Title>
                        <Card.Text className={`${text}`}>
                            {props.Disc}

                        </Card.Text>
                        <a href={props.Link} target="_blank"><Button className={`${btnBg} ${btnText}`}>{props.BtnLinkText}</Button></a>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}