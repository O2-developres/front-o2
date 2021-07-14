import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Modal,Button } from 'react-bootstrap';

class Cartmodel extends Component {


    constructor(props) {
        super(props);
this.state={
    show:false
}
    }



    addToCart=()=>{
        const reqBody={
                  nameImg: this.props.nameImg,
                  img: this.props.img,
                  priceImg: this.props.priceImg,
                  email:this.props.auth0.user.email
                }
                axios.post(`${process.env.REACT_APP_PORT}/cart`,reqBody).then(res=>{
                    console.log(res.data)
                })
                this.setState({
                    show:true
                })
               
       }

       closeModel=()=>{
        this.setState({
            show:false
        })
       }
    render() {
        return (
            <div>
                <button className="profile--button update-btn" 
                         onClick={()=>{this.addToCart()}} > to cart</button>
                <Modal show={this.state.show} >
                    <Modal.Header>
                    <Modal.Title><h2>Thank You</h2></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <p>Your Order has been sent to cart</p>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={()=>{this.closeModel()}}> Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default withAuth0(Cartmodel)
