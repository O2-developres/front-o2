import React, { Component } from 'react'
import axios from "axios";
import Header from './Header'
import Footer from './Footer';
import img1 from '../images/contactusimg2.jpg'
import { Container,Form,Button,Row } from 'react-bootstrap';

 class ContactUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message:'',
          firstName:'',
          lastName:'',
          userEmail:'',
    
        };
      }

    getInputfirstName=(e)=>{
        this.setState({
            firstName:e.target.value,
        })
      }
      getInputlastName=(e)=>{
        this.setState({
            lastName:e.target.value,
        })
      }
      getInputmessage=(e)=>{
        this.setState({
            message:e.target.value,
        })
      }
      getInputuserEmail=(e)=>{
        this.setState({
            userEmail:e.target.value,
        })
      }

    createContact=(e)=>{

//  email= ${this.props.auth0.user.email} also env for link
        e.preventDefault();
        const reqBody={
            email:'anofal719@gmail.com',
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            message:this.state.message,
            userEmail:this.state.userEmail,

            
        }
        axios.post(`http://localhost:8000/admin`,reqBody).then(res=>{
          console.log(res.data)
        }
          
        ).catch(error=>{alert(error.message)})
        e.target.reset();
      }
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
                <Form className="form-section" onSubmit={(e)=>{this.createContact(e)}}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="form-text">First Name *</Form.Label>
                            <Form.Control className="form-control" type="text" placeholder="First Name"  onChange={(e)=>{this.getInputfirstName(e)}}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="form-text">Last Name *</Form.Label>
                            <Form.Control className="form-control" type="text" placeholder="Last Name"  onChange={(e)=>{this.getInputlastName(e)}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="form-text">Email Address *</Form.Label>
                            <Form.Control className="form-control" type="Email" placeholder="Enter Email"  onChange={(e)=>{this.getInputuserEmail(e)}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="form-text">Message</Form.Label>
                            <Form.Control className="form-control" placeholder="Enter Your Message" as="textarea" rows={3}  onChange={(e)=>{this.getInputmessage(e)}}/>
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
