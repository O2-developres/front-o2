import React, { Component } from 'react'
import {Navbar,
    Container
} from 'react-bootstrap'
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
            </Container>
            </Navbar>
        )
    }
}

export default Footer
