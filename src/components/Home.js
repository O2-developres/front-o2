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
    Card,
} from 'react-bootstrap'
import { Link } from "react-router-dom";
import img1 from '../Images/home-top1.jpg'
import img2 from '../Images/home-top2.jpg'
import img3 from '../Images/home-top3.jpg'
import img4 from '../Images/home-top4.jpg'
import artist1 from '../Images/home-artist1.jpg'
import artist2 from '../Images/home-artist2.jpg'
import artistPic1 from '../Images/artist1.jpg'
import artistPic2 from '../Images/artist2.jpg'
import artistPic3 from '../Images/artist3.jpg'
import artistPic4 from '../Images/artist4.jpg'
import homeSlide1 from '../Images/home-slide1.png'
import homeSlide2 from '../Images/home-slide2.png'
import homeSlide3 from '../Images/home-slide3.png'
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
                                    src={img2}
                                    alt="First slide"
                                />
                                <img
                                className="d-block"
                                src={img2} 
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h5 className="home-carsl-h5">Draw</h5>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img className="carousel-ineer-img"
                                    src={img3}
                                    alt="First slide"
                                />
                                <img
                                className="d-block "
                                src={img3}
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                <h5 className="home-carsl-h5">Creative</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img className="carousel-ineer-img"
                                    src={img1}
                                    alt="First slide"
                                />
                                <img
                                className="d-block "
                                src={img1}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h5 className="home-carsl-h5">Share</h5>
                               
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
                        <Link to="/Gallery">
                        <Button className="home-discover-btn" >Discover</Button>
                        </Link>
                    </Row>
                    <Row className="home-video-section">
                        <Button className="home-video-btn" onClick={()=>{this.handleModal()}}>
                        <img className="home-video-img" alt="imag" src={img4}/>
                        <FontAwesomeIcon icon={faPlayCircle} className=""/>
                        </Button>
                        <Modal show={this.state.show} className="home-video-modal" onHide={()=>this.handleModal()}>
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
                        <h1>What you can do</h1>
                    </Row>
                    <Row>
                        <Container className="home-future">
                            <Row>
                                <Col >
                                    <Fade left>
                                        <div className="home-future-para">
                                            <h3 className="home-future-para-h3">Simple, attractive and efficient design</h3>
                                            <p className="home-future-p">Professionally designed that make your work truly shine with complete customization and thousands of design variations. Create a unique website with our intuitive design editor</p>
                                        </div>
                                    </Fade>
                                </Col>
                                <Col >
                                    <Fade right>
                                    <img
                                        className="d-block w-100 home-future-img"
                                        src={homeSlide1}
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
                                            src={homeSlide2}
                                            alt="Third slide"
                                            />
                                    </Fade>
                                </Col>
                                <Col>
                                    <Fade right>
                                        <div className="home-future-para">
                                                <h3 className="home-future-para-h3">Add Your works</h3>
                                                <p className="home-future-p">Showcase your best work with Online  Website and run your business like a pro with Workflow.</p>
                                            </div>
                                    </Fade >
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Fade left>
                                        <div className="home-future-para">
                                            <h3 className="home-future-para-h3">Sell and fulfill globally with ecommerce shops for photographers & artists</h3>
                                            <p className="home-future-p">Sell all kinds of products, prints, packages, Lightroom presets, and digital products in your store. Our trusted print labs will handle the production and shipping directly to your customers.</p>
                                        </div>
                                    </Fade>
                                </Col>
                                <Col>
                                    <Fade right>
                                    <img
                                        className="d-block w-100 home-future-img"
                                        src={homeSlide3}
                                        alt="Third slide"
                                        />
                                    </Fade >
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                    <Row className="home-headings">
                        <h1>Need some Inspiration?</h1>
                        <p>Every artist, beginner or professional, will need a little pick-me-up once in a while, to get over a bad piece of work they thought would turn out well or to overcome artist’s block. Here are inspirational art quotes, from painters to philosophers, from scientists to photographers.</p>
                    </Row>
                    <Row className="home-qouts-section">
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Img  alt="imag"
                                        src={artistPic1}
                                    />
                                    <Card.Title>
                                        <LightSpeed left cascade>
                                       Dario Fo
                                        </LightSpeed>
                                        </Card.Title>
                                    <Card.Text>
                                    <LightSpeed left cascade>
                                   "While drawing I discover what I really want to say." 
                                    </LightSpeed>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                <Card.Img   alt="imag"
                                        src={artistPic2}
                                    />
                                    <Card.Title>
                                        <LightSpeed left cascade>
                                       Michelangelo
                                        </LightSpeed>
                                        </Card.Title>
                                    <Card.Text>
                                    <LightSpeed left cascade>
                                    "If people only knew how hard I work to gain my mastery. It wouldn't seem so wonderful at all."
                                    </LightSpeed>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>
                                    <Card.Img   alt="imag"
                                        src={artistPic3}
                                    />
                                        <LightSpeed left cascade>
                                        Chuck Close
                                        </LightSpeed>
                                        </Card.Title>
                                    <Card.Text>
                                    <LightSpeed left cascade>
                                    "Inspiration is for amateurs. The rest of us just show up and get the work done."
                                    </LightSpeed>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                <Card.Img   alt="imag"
                                        src={artistPic4}
                                    />
                                    <Card.Title>
                                        <LightSpeed left cascade>
                                        Paul Cezanne
                                        </LightSpeed>
                                        </Card.Title>
                                    <Card.Text>
                                    <LightSpeed left cascade>
                                    "A work of art which did not begin in emotion is not art."
                                    </LightSpeed>
                                    </Card.Text>
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
