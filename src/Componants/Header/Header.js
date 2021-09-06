import React, { useContext } from "react"

import ToggleButton from "../ToggleButton/ToggleButton"

import "../../App.css"
import "./Header.css"

import { Context } from "../../Context/Context";

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














/* //attempt # 1 rejected because not sure od how to impliment smooth styl;ing in this format

import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import ToggleButton from "../ToggleButton/ToggleButton";
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Container, Nav } from "react-bootstrap"
import IDev from "../../Media/IDev.svg"
import "../../App.css"

export default function () {
    const [context, setContext] = useContext(Context);
    return (

        <>
            <Navbar bg="primary" variant="dark">
                <Container>

                    <Navbar.Brand href="#home">
                        <img
                            alt="Logo"
                            src={IDev}
                            width="80"
                            height="75"
                            className="d-inline-block align-center"
                        />{' '}
                        By James Conway
                    </Navbar.Brand>

                    <Nav className="justify-content-end ">

                        <LinkContainer to="/">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/projects">
                            <Nav.Link href="#link">Projects</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/about">
                            <Nav.Link href="#about">About</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/cv">
                            <Nav.Link href="#cv">CV</Nav.Link>
                        </LinkContainer>

                        <div >
                            <ToggleButton />
                        </div>

                    </Nav>

                </Container>
            </Navbar>
        </>

    )
}
 */