import React, { Component } from 'react'
import {Navbar,
    Container,
    Nav
} from 'react-bootstrap'
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Navbar  bg="dark" variant="dark" className="footer">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src="/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Nav.Link href="#Header"><Link to="/ContactUs">Contact Us</Link></Nav.Link>

              <Nav.Link href="#pricing"><Link to="/">About Us</Link></Nav.Link>

            </Container>
            </Navbar>
        )
    }
}

export default Footer
