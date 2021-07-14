import React, { Component } from 'react'
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import Header from './Header'
import Footer from './Footer';
import img1 from '../images/img11.jpg'
import '../css/ContactUs.css';
import { Container,Form,Button,Modal } from 'react-bootstrap';

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

        e.preventDefault();
        const reqBody={
            email:'anofal719@gmail.com'||'ibrahem.omari96@gmail.com',
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            message:this.state.message,
            userEmail:this.state.userEmail,

            
        }
        axios.post(`${process.env.REACT_APP_PORT}/admin`,reqBody).then(res=>{
          console.log(res.data)
        }
          
        ).catch(error=>{alert(error.message)})
        
          this.setState({ show: true });
        
        e.target.reset();

      }

         // ----------------- Show Modal Functions ---------------------------
    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
//  ------------------------------------------------------------------------
    render() {
        return (
            <>
                <Header/> 
                <Container className="container">
                    
                        <div class="div-in-contactus">
                            <img class ="contactus-img" alt="imag" src={img1}  />
                            <p class="text-above-img1">
                                Contact Us</p>
                                <p class="text-above-img2">We'd Love To Hear From You</p>
                        </div>
                   
                <br/> <br/>
                <Form className="form-section" onSubmit={(e)=>{this.createContact(e)}}>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <Form.Label className="form-text" >First Name *</Form.Label>
                            <Form.Control className="form-control" type="text" placeholder="First Name"  onChange={(e)=>{this.getInputfirstName(e)}} required/>
                        </Form.Group> 

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="form-text">Last Name *</Form.Label>
                            <Form.Control className="form-control" type="text" placeholder="Last Name"  onChange={(e)=>{this.getInputlastName(e)}} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="form-text">Email Address *</Form.Label>
                            <Form.Control className="form-control" type="Email" placeholder="Enter Email"  onChange={(e)=>{this.getInputuserEmail(e)}} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="form-text">Message</Form.Label>
                            <Form.Control className="form-control" placeholder="Enter Your Message" as="textarea" rows={3}  onChange={(e)=>{this.getInputmessage(e)}} required/>
                        </Form.Group>
                        <Button className="contactus-form-button" variant="warning" type="submit" >Submit</Button>
                    </Form>
                  <br/> <br/>
                  
               {/* ------------------------------------ Add Modal ----------------------------------------------- */}

                <Modal show={this.state.show} onHide={this.hideModal}>
                    <Modal.Header>
                    <Modal.Title><h2>Thank You</h2></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <p>Your message has been sent</p>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.hideModal}> Close</Button>
                    </Modal.Footer>
                </Modal>
                </Container>
                <Footer/>
            </>
        )
    }
}

export default withAuth0(ContactUs)
