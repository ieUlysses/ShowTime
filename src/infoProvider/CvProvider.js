import React from "react"
import Card from "../Componants/Card/Card"
export default function () {

    const Experience = [
        {
            Title: "Avalon House",
            Link: "",
            BtnLinkText: "Check the map",
            Years: "07/18 - 05/19",
            Disc: "Stationed between 2 properties. Responsibilities included Pr and Social Media ",
        },
        {
            Title: "C.E.S.S",
            Years: "07/17 - 03/19",
            Link: "https://www.staffing.ie/",
            BtnLinkText: "Check the map",
            Disc: "Door staff and occasional Bar staff. Responsibilities included ticket control and stock rotation",
        },
        {
            Title: "MEININGER Berlin",
            Years: " 06/19 - 05/20",
            Link: `https://www.google.de/maps/place/MEININGER+Hotel+Berlin+Airport/@52.3966726,13.5382284,17z/data=!3m1!4b1!4m8!3m7!1s0x47a850eff11719d3:0x8ec416fb3612e784!5m2!4m1!1i2!8m2!3d52.3966149!4d13.5404277`,
            BtnLinkText: "Check the map",
            Disc: "Receptionist & Social Media Ambassador"
        },
        {
            Title: "Cv",
            Years: " Current 09/21",
            Link: `https://www.google.de/maps/place/MEININGER+Hotel+Berlin+Airport/@52.3966726,13.5382284,17z/data=!3m1!4b1!4m8!3m7!1s0x47a850eff11719d3:0x8ec416fb3612e784!5m2!4m1!1i2!8m2!3d52.3966149!4d13.5404277`,
            BtnLinkText: "View Cv",
            Disc: "Just a plain old Cv, and cover letter"
        },

    ]

    return (
        <>
            {
                Experience.map((props) => <Card
                    Title={props.Title}
                    Years={props.Years}
                    Disc={props.Disc}
                    Link={props.Link}
                    BtnLinkText={props.BtnLinkText}
                />)
            }
        </>
    )
}