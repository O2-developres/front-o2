import React, { Component } from 'react'
import '../Profile.css'
import Header from './Header'
import {
    Container,
    Row,
    Modal,
    Tab,
    Nav,
    Col,
    Button
} from 'react-bootstrap'
import 'react-toastify/dist/ReactToastify.css';
import {FaFacebook ,FaLinkedin,FaInstagram, FaTwitter} from 'react-icons/fa';
import ibrahemPic from '../Images/ibrahem-profile.jpg'
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }}

    handleModal(){
        this.setState({show:!this.state.show})
    }
 
    render() {
        return (
            <div>
                <Header/>
                <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

                    <header id="header">
                    <div className="d-flex flex-column">

                        <div className="profile">
                        <img src={ibrahemPic}/>
                        <h1 className="text-light">Ibrahem</h1>
                        <div className="social-links mt-3 text-center">
                            <a href="#" className="twitter"><FaTwitter/></a>
                            <a href="#" className="facebook"><FaFacebook/></a>
                            <a href="#" className="instagram"><FaInstagram/></a>
                            <a href="#" className="linkedin"><FaLinkedin/></a>
                        </div>
                        </div>

                        <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                            <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Gallary</span></a></li>
                        </ul>
                        </nav>
                    </div>
                    </header>


                    <section id="hero" className="d-flex flex-column justify-content-center align-items-center" 
                    style={
                        {    background: 'url("https://i.pinimg.com/originals/45/cf/a8/45cfa8e8fef45c356253cf9938a4cc9c.jpg") top right',
                             width:"80%",
                             height: "100vh",
                             backgroundSize: "100rem",
                             marginLeft:"20rem",
                    }
                    }
                    >
                    <div className="hero-container">
                        <h1>Ibrahem alomari</h1>
                        <p>Artist</p>
                        <div className="hero-img-contianer">
                            <img className="hero-img-main" 
                            src={ibrahemPic}
                            ></img>
                        </div>
                    </div>
                    </section>

                    <main id="main">
                    <section id="portfolio" className="portfolio section-bg">
                        <div className="container">
                        <div className="section-title">
                            <h2>Gallary</h2>
                        </div>
                        <div className="row" data-aos="fade-up">
                            <div className="col-lg-12 d-flex justify-content-center">
                            </div>
                        </div>
                        <Tab.Container id="left-tabs-example"  defaultActiveKey="first">
                            <Row className="gallary-section">
                                <Col sm={1}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                    <Nav.Link eventKey="first">Picture</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="second">Favorite</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="theard">Add</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                </Col>
                                <Col sm={1}></Col>
                                <Col sm={10}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                    <div className="profile--card" onClick={()=>{this.handleModal()}}>
                                        <img src={ibrahemPic}/>
                                        <div className="profile--info">
                                        <h1 className="profile--h1">Mountain</h1>
                                        <p className="profile--p">Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                                        <button className="profile--button update-btn">Update</button>
                                        <button className="profile--button delete-btn">Delete</button>
                                        </div>
                                    </div>

                                    <div className="profile--card" onClick={()=>{this.handleModal()}}>
                                        <img src={ibrahemPic}/>
                                        <div className="profile--info">
                                        <h1 className="profile--h1">Mountain</h1>
                                        <p className="profile--p">Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                                        <button className="profile--button update-btn">Update</button>
                                        <button className="profile--button delete-btn">Delete</button>
                                        </div>
                                    </div>
                                    <Modal className="profile-modal" show={this.state.show} onHide={()=>this.handleModal()} closeButton>
                                        <Modal.Header className="profile-modal-header" closeButton><h3>test</h3></Modal.Header>
                                        <Modal.Body className="profile-modal-body">
                                            <img 
                                                className="profile-modal-img"
                                                src={ibrahemPic}
                                            />
                                        </Modal.Body>
                                    </Modal>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        
                                    <div className="profile--card"><img src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
                                        <div className="profile--info">
                                        <h1 className="profile--h1">Mountain</h1>
                                        <p className="profile--p">Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                                        <button className="profile--button  delete-btn">Delete</button>
                                        </div>
                                    </div>
                                    
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="theard">
                                        <form className="profile-add-form">
                                            <input class="form-control form-control-lg" type="text" placeholder="Title"/>
                                            <input class="form-control form-control-lg" type="text" placeholder="Description"/>
                                            <input class="form-control form-control-lg" type="text" placeholder="Image Url"/>
                                            <input class="form-control form-control-lg" type="text" placeholder="Price"/>
                                            <Button variant="success">Add</Button>
                                        </form>    
                                    </Tab.Pane>
                                </Tab.Content>
                                </Col>
                            </Row>
                            </Tab.Container>

                            <Container className="profile-gallary-contianer">
                                <Row>

                                </Row>
                                
                            </Container>

                        </div>
                    </section>
                    </main>

                    <footer id="footer">
                    <div className="container">

                    </div>
                    </footer>
                    </div>
        )
    }
}

export default Profile
