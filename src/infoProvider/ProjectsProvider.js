import React from "react"
import Card from "../Componants/Card/Card"
export default function () {

    const Projects = [
        {
            Title: "FizzBuzz",
            Link: "https://github.com/ieUlysses/FizzBuzz",
            BtnLinkText: "To the Repo",
            Disc: " The Classic, React Style, to get results please open console :)",
        }, {
            Title: "REST C",
            Link: "https://github.com/ieUlysses/Rest-Countries-revisited",
            BtnLinkText: "To the Repo",
            Disc: "REST Countries....Revisited",
        },
        {
            Title: "Final Project",
            Link: "",
            BtnLinkText: "To the Repo",
            Disc: "A prime example in zombie styling, and how not to do it. It's pretty tho",
        },
        {
            Title: "A blank Project",
            Link: "https://github.com/AldoCasareto/kidsShare",
            BtnLinkText: "To the Repo",
            Disc: "For the layout",
        },

    ]

    return (
        <>
            {
                Projects.map((props) => <Card
                    Title={props.Title}
                    Disc={props.Disc}
                    Link={props.Link}
                    BtnLinkText={props.BtnLinkText}
                />)
            }
        </>
    )
}