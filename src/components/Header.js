import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import {
    Navbar, 
    Container,
    Nav

} from 'react-bootstrap'
import { Link } from "react-router-dom";
class Header extends Component {
    constructor(props) {
        super(props);
        this.listener = null;
        this.state = {
          status: "top"
        };
      }
      componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
          var scrolled = document.scrollingElement.scrollTop;
          if (scrolled >= 120) {
            if (this.state.status !== "") {
              this.setState({ status: "" });
            }
          } else {
            if (this.state.status !== "top") {
              this.setState({ status: "top" });
            }
          }
        });
      }
      componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
      }
    render() {
        return (
            <>

                <Navbar fixed="top"  variant="dark" className="navbar-header" id="mynav"
                 style={{
                    backgroundColor: this.state.status === "top" ? "rgba(255, 255, 255, 0.0)" : "rgba(255, 255, 255, 1)",
                    boxShadow: this.state.status === "top" ? "0 8px 8px rgba(0, 0, 0, 0)" : "0 8px 8px rgba(0, 0, 0, 0.308)",
                    transition:"1s"
                  }}
                >
                    <Container>
                    <Navbar.Brand ><Link to="/">O2 Arts</Link></Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link href="#features"><Link to="/Gallery">Gallery</Link></Nav.Link>
                    <Nav.Link href="#pricing"><Link to="/Store">Store</Link></Nav.Link>
                    {this.props.auth0.isAuthenticated&&this.props.auth0.user.email!=='anofal719@gmail.com'&&
                    <Nav.Link ><Link to="/profile">Profile</Link></Nav.Link>}
                    
                    {this.props.auth0.isAuthenticated&&this.props.auth0.user.email!=='anofal719@gmail.com' &&<Nav.Link ><Link to="/CartPage">Cart</Link></Nav.Link>}
                      {this.props.auth0.isAuthenticated&&this.props.auth0.user.email=='anofal719@gmail.com' &&<Nav.Link >
                        <Link to="/Admin">
                        admin</Link></Nav.Link>}
                    
                    <Nav.Link ><Link to="/">
                      {this.props.auth0.isAuthenticated ? <LogoutButton/> : <LoginButton/>}
                      </Link></Nav.Link>
                      
                      
                    </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default withAuth0(Header) 
