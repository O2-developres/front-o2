import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer';
import {LightSpeed,Fade} from 'react-reveal/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons/faPlayCircle'
import {
    Container,
    Row,
    Modal,
    Button,
    Carousel,
    Col,
    Card
} from 'react-bootstrap'
class Home extends Component {
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
            <>
                <Header/>
                <Container fluid className="home-video-contianer">
                    <Row>
                    <div className="home-top-section">
                        <h1 className="home-title">Home page </h1>
                        <h1 className="home-title-lastWord"> Last word</h1>
                    </div>
                    </Row>
                    <Row className="home-top-para">
                        <p>
                            test kdjfklhfjghfjghfdjhgjdhjghdjfhghdjhgjkfhgjdfhgjhdfjhg
                            kjdgkfdjgfkdjgkldfjkgjfdllgkjfdjg
                        </p>
                        <Button>Discover</Button>
                    </Row>
                    <Row className="home-video-section">
                        <Button className="home-video-btn" onClick={()=>{this.handleModal()}}>
                        <img className="home-video-img" src="https://st.depositphotos.com/1522993/4737/v/600/depositphotos_47372005-stock-illustration-orange-blue-background-with-triagles.jpg"/>
                        <FontAwesomeIcon icon={faPlayCircle} className=""/>
                        </Button>
                        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                            <Modal.Body>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/eXFsKIdHi3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Modal.Body>
                        </Modal>
                    </Row>
                    <hr className="break-line"></hr>
                    <Row className="home-headings">
                        <h1>test</h1>
                        <p>testt</p>
                    </Row>
                    <Row className="home-artistWork-section">
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 carousel-img "
                            src="https://html.sammy-codes.com/images/background.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 carousel-img"
                            src="https://html.sammy-codes.com/images/background.jpg"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 carousel-img"
                            src="https://html.sammy-codes.com/images/background.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                    </Row>
                    <hr className="break-line"></hr>
                    <Row className="home-headings">
                        <h1>test</h1>
                        <p>testt</p>
                    </Row>
                    <Row>
                        <Container className="home-future">
                            <Row>
                                <Col>
                                    <Fade left>
                                        <div className="home-future-para">
                                            <h3 className="home-future-para-h3">title</h3>
                                            <p className="home-future-p">sub-title</p>
                                        </div>
                                    </Fade>
                                </Col>
                                <Col>
                                    <Fade right>
                                    <img
                                        className="d-block w-100 home-future-img"
                                        src="https://html.sammy-codes.com/images/background.jpg"
                                        alt="Third slide"
                                        />
                                    </Fade >
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Fade left>
                                        <img
                                            className="d-block w-100 home-future-img"
                                            src="https://html.sammy-codes.com/images/background.jpg"
                                            alt="Third slide"
                                            />
                                    </Fade>
                                </Col>
                                <Col>
                                    <Fade right>
                                        <div className="home-future-para">
                                                <h3 className="home-future-para-h3">title</h3>
                                                <p className="home-future-p">sub-title</p>
                                            </div>
                                    </Fade >
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Fade left>
                                        <div className="home-future-para">
                                            <h3 className="home-future-para-h3">title</h3>
                                            <p className="home-future-p">sub-title</p>
                                        </div>
                                    </Fade>
                                </Col>
                                <Col>
                                    <Fade right>
                                    <img
                                        className="d-block w-100 home-future-img"
                                        src="https://html.sammy-codes.com/images/background.jpg"
                                        alt="Third slide"
                                        />
                                    </Fade >
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                    <Row className="home-headings">
                        <h1>test</h1>
                        <p>testt</p>
                    </Row>
                    <Row className="home-qouts-section">
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>
                                        <LightSpeed left cascade>
                                        Card Title
                                        </LightSpeed>
                                        </Card.Title>
                                    <Card.Text>
                                    <LightSpeed left cascade>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </LightSpeed>
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>
                                        <LightSpeed left cascade>
                                        Card Title
                                        </LightSpeed>
                                        </Card.Title>
                                    <Card.Text>
                                    <LightSpeed left cascade>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </LightSpeed>
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>
                                        <LightSpeed left cascade>
                                        Card Title
                                        </LightSpeed>
                                        </Card.Title>
                                    <Card.Text>
                                    <LightSpeed left cascade>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </LightSpeed>
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>
                                        <LightSpeed left cascade>
                                        Card Title
                                        </LightSpeed>
                                        </Card.Title>
                                    <Card.Text>
                                    <LightSpeed left cascade>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </LightSpeed>
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
                
            </>
        )
    }
}

export default Home
