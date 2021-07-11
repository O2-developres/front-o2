import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer';
import img1 from '../images/contactusimg2.jpg'
import { Container,Form,Button,Row } from 'react-bootstrap';

 class ContactUs extends Component {
    render() {
        return (
            <>
                <Header/> 
                <Container>
                    <Row >
                        <div class="div-in-contactus">
                            <img class ="contactus-img" src={img1}  />
                            <p class="text-above-img1">
                                Contact Us</p>
                        </div>
                    </Row>
                <br/> <br/>
                <Form className="form-section">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="form-text">First Name *</Form.Label>
                            <Form.Control className="form-control" type="text" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="form-text">Last Name *</Form.Label>
                            <Form.Control className="form-control" type="text" placeholder="Last Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="form-text">Email Address *</Form.Label>
                            <Form.Control className="form-control" type="Email" placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="form-text">Message</Form.Label>
                            <Form.Control className="form-control" placeholder="Enter Your Message" as="textarea" rows={3} />
                        </Form.Group>
                        <Button className="contactus-form-button" variant="primary" type="submit">Submit</Button>
                    </Form>
                  <br/> <br/>
                </Container>
                <Footer/>
            </>
        )
    }
}

export default ContactUs
