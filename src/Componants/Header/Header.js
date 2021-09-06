import React, { useContext } from "react"



import "../../App.css"
import "./Header.css"

import { Context } from "../../Context/Context";
import ToggleButton from "../ToggleButton/ToggleButton"

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
export default function () {

    const [context, setContext] = useContext(Context);

    let bg = ""
    let tCol = ""
    let nCol = ""
    if (context === "") {
        bg = "light"
        tCol = "text-dark"
        nCol = "dark"
    } else {
        bg = "dark"
        tCol = "text-light"
        nCol = "light"
    }

    return (

        <>

            <Navbar bg={bg} expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className={tCol}>James x Jomigo</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={tCol}>Home</Nav.Link>

                            <Nav.Link href="#projects" className={tCol}>Projects</Nav.Link>

                            <Nav.Link href="#about" className={tCol}>About</Nav.Link>

                            {/* Why on earth can't i stylel the settings dropdown */}

                            <Nav.Link href="#cv" className={tCol}>CV</Nav.Link>

                            <NavDropdown varient={nCol} title="Settings" id="basic-nav-dropdown" >
                                <NavDropdown.Item > <ToggleButton /> </NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}












