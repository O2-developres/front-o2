import React, { Component } from 'react'
import {
    Navbar, 
    Container,
    Nav

} from 'react-bootstrap'
import { Link } from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home"><Link to="/">Navbar</Link></Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link href="#pricing"><Link to="/">Store</Link></Nav.Link>
                    <Nav.Link href="#features"><Link to="/">Profile</Link></Nav.Link>
                    <Nav.Link href="#features"><Link to="/">Sign in</Link></Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default Header
