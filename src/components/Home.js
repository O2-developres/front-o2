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

import img1 from '../Images/home-top1.jpg'
import img2 from '../Images/home-top2.jpg'
import img3 from '../Images/home-top3.jpg'
import img4 from '../Images/home-top4.jpg'
import artist1 from '../Images/home-artist1.jpg'
import artist2 from '../Images/home-artist2.jpg'
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
                <Container fluid className="home-page">
                    <Row className="home-top-background-section">
                        <Carousel variant="dark" controls="false">
                            <Carousel.Item>
                            <img className="carousel-ineer-img"
                                    src={img1}
                                    alt="First slide"
                                />
                                <img
                                className="d-block w-100"
                                src={img1} 
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img className="carousel-ineer-img"
                                    src={img3}
                                    alt="First slide"
                                />
                                <img
                                className="d-block w-100"
                                src={img3}
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img className="carousel-ineer-img"
                                    src={img2}
                                    alt="First slide"
                                />
                                <img
                                className="d-block w-100"
                                src={img2}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h5>Third slide label</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>
                    </Row>
                    <Row>
                    <div className="home-top-section">
                        <h1 className="home-title">The place where art has value is </h1>
                        <h1 className="home-title-lastWord"> O2 Arts</h1>
                    </div>
                    </Row>
                    <Row className="home-top-para">
                        <p>
                            “I found I could say things with color and shapes that I couldn’t say any other way—things I had no words for.”
                        </p>
                        <Button className="home-discover-btn">Discover</Button>
                    </Row>
                    <Row className="home-video-section">
                        <Button className="home-video-btn" onClick={()=>{this.handleModal()}}>
                        <img className="home-video-img" src={img4}/>
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
                        <h1>Greatest Painters of All Time</h1>
                        <p>one needs to possess a special combination of technical skills, outlandish creative thinking, and determination.</p>
                    </Row>
                    <Row className="home-artistWork-section">
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 carousel-img "
                            src={artist1}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>LEONARDO DA VINCI</h3>
                            <p>The Mona Lisa is an oil painting by Italian artist, inventor, and writer Leonardo da Vinci. Likely completed in 1506, the piece features a portrait of a seated woman set against an imaginary landscape.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 carousel-img"
                            src={artist2}
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>VINCENT VAN GOGH</h3>
                            <p>“Hope is in the stars,” the artist wrote to his brother. For this reason, The Starry Night painting is often interpreted as having a hopeful message.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 carousel-img"
                            src={artist1}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>TAMARA DE LEMPICKA</h3>
                            <p>Rubbing elbows with the avant-garde in Paris, she turned away from Impressionism—the popular style of the time—and focused on blazing her own trail. The graphic quality of her work and their rich</p>
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
                                <Col >
                                    <Fade left>
                                        <div className="home-future-para">
                                            <h3 className="home-future-para-h3">title</h3>
                                            <p className="home-future-p">sub-title</p>
                                        </div>
                                    </Fade>
                                </Col>
                                <Col >
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
