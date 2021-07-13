import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import "../Profile.css";
import "../Admin.css";
import Header from "./Header";
import axios from "axios";
import { Container, Row, Alert, Tab, Nav, Col, Button,Card,ListGroup,ListGroupItem} from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          ListFeed:[],
          listUsers:[]
        }};


componentDidMount=async()=>{
  const url =`http://localhost:8000/admin?email=${this.props.auth0.user.email}`
  const axiosData=await axios.get(url).catch(error=>{alert(error.message)});

  let url4 = `http://localhost:8000/store`;
  const axiosData4 = await axios.get(url4).catch(error=>{alert(error.message)});

  console.log(axiosData.data.contactUs)
  console.log(axiosData4.data)
  this.setState({
    ListFeed:axiosData.data.contactUs,
    listUsers:axiosData4.data
  })
}
    render() {
        return (
            <>
                <div>
        <Header />
        <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

        <header id="header">
          <div className="d-flex flex-column">
            <div className="profile">
              <img src={this.props.auth0.user.picture} />
              <h1 className="text-light">{this.props.auth0.user.name}</h1>
              <div className="social-links mt-3 text-center">
                <a href="#" className="twitter">
                  <FaTwitter />
                </a>
                <a href="#" className="facebook">
                  <FaFacebook />
                </a>
                <a href="#" className="instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="linkedin">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <nav id="navbar" className="nav-menu navbar">
              <ul>
                <li>
                  <a href="#hero" className="nav-link scrollto active">
                    <i className="bx bx-home"></i> <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="nav-link scrollto">
                    <i className="bx bx-book-content"></i> <span>Dashboard</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <section
          id="hero"
          className="d-flex flex-column justify-content-center align-items-center"
          style={{
            background:
              'url("https://i.pinimg.com/originals/45/cf/a8/45cfa8e8fef45c356253cf9938a4cc9c.jpg") top right',
            width: "80%",
            height: "100vh",
            backgroundSize: "100rem",
            marginLeft: "20rem",
          }}
        >
          <div className="hero-container">
            <h1>{this.props.auth0.user.name}</h1>
            <p>Admin</p>
            <div className="hero-img-contianer">
              <img className="hero-img-main" src={this.props.auth0.user.picture}/>
            </div>
          </div>
        </section>

        <main id="main">
          <section id="portfolio" className="portfolio section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Dashboard</h2>
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-lg-12 d-flex justify-content-center"></div>
              </div>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="gallary-section">
                  <Col sm={1}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Users</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Feedback</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={1}></Col>
                  <Col sm={10}>
                    {/*  */}
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                          <Row>
                            <Card>
                                <Card.Body>
                                    <div className="admin-card-body">
                                    <img src={this.props.auth0.user.picture} className="admin-card-img"/>
                                        <span className="profile-user-name">{this.props.auth0.user.name}</span>
                                    </div>
                                    <ListGroup className="list-group-flush admin-card-list">
                                        <ListGroupItem ><span className="admin-card-item">Email:</span>{this.props.auth0.user.email}</ListGroupItem>   
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                            </Row>
                      </Tab.Pane>


                      <Tab.Pane eventKey="second">
                          <Row>

                            {
                              this.state.ListFeed.map((item, indx) => {
                                return (<>
                                
                                <Card className="admin-contact-card">
                                <Card.Header>{`${item.firstName} ${item.lastName}`}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{item.userEmail}</Card.Title>
                                    <Card.Text>
                                       {item.message}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                                
                                
                                </>)
                               })
                            }
                            
                          </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </section>
        </main>

        <footer id="footer">
          <div className="container"></div>
        </footer>
      </div>
            </>
        )
    }
}

export default withAuth0(Admin)
