import React, { Component } from 'react'
import {Navbar,
    Container,
    Row,
    Col,
    
} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons/faMailBulk'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faFax } from '@fortawesome/free-solid-svg-icons/faFax'
import { FaCopyright,FaFacebookSquare ,FaTwitterSquare,FaLinkedin,FaGithubSquare} from 'react-icons/fa';
class Footer extends Component {
    render() {
        return (
            <footer  className="footer">
            <Container>
              <Row className="full-width footer-title">
                <Col xs={3}>O2 Arts</Col>
                <Col xs={3}>Conatct</Col>
                <Col xs={3}>Links</Col>
                <Col xs={3}> Useful Links</Col>
              </Row>
              <hr className="break-line-footer"></hr>
              <Row className="full-width">
              <Col xs={3}>Logo</Col>
                <Col xs={3}>
                  <ul className="footer-contact-list">
                    <li>
                      <FontAwesomeIcon icon={faHome} className=""/>
                       Jordan - Amman
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faMailBulk} className=""/>
                      O2.company@email.com
                      </li>
                    <li>
                      <FontAwesomeIcon icon={faPhone} className=""/>
                      +962-9999-999
                      </li>
                    <li>
                      <FontAwesomeIcon icon={faFax} className=""/>
                      +962-9999-999
                    </li>
                  </ul>
                </Col>
                <Col xs={3}>
                  <ul className="footer-contact-list">
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/">Store</Link>
                    </li>
                    <li>
                    <Link to="/">About</Link>
                    </li>
                    <li>
                    <Link to="/">Contact</Link>
                    </li>
                  </ul>
                </Col>
                <Col xs={3}>
                <ul className="footer-contact-list">
                    <li>
                    <a href="https://github.com/O2-developres" target="__blank">Github repo</a>
                    </li>
                    <li>
                    <Link to="/">Artist</Link>
                    </li>
                    <li>
                    <Link to="/">Gallary</Link>
                    </li>
                    <li>
                    <Link to="/">Google photo</Link>
                    </li>
                  </ul>
                </Col>
              </Row>
              <hr className="break-line-footer"></hr>
              <Row className="full-width">
              <Col xs={3}></Col>
              <Col xs={6}>
              <ul className="footer-contact-list-social">
                    <li>
                    <a href="https://github.com/O2-developres" target="__blank"><FaGithubSquare/></a>
                    </li>
                    <li>
                    <Link to="/"><FaLinkedin/></Link>
                    </li>
                    <li>
                    <Link to="/"><FaFacebookSquare/></Link>
                    </li>
                    <li>
                    <Link to="/"><FaTwitterSquare/></Link>
                    </li>
                  </ul>
              </Col>
                  <Col xs={4}></Col>
              </Row>
              <hr className="break-line-footer"></hr>
              <Row>
                  <div className="copy-right">
                      <p><FaCopyright/>2021 Copyright : <span>O2 Art</span></p>
                  </div>
              </Row>
              

              {/* <Navbar.Brand href="#home">
                <img
                  src="/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Nav.Link href="#Header"><Link to="/ContactUs">Contact Us</Link></Nav.Link>

              <Nav.Link href="#pricing"></Nav.Link> */}

            </Container>
            </footer>
        )
    }
}

export default Footer
