import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
class Cartmodel extends Component {

    constructor(props) {
        super(props);

    }



    addToCart=()=>{
        const reqBody={
                  nameImg: this.props.nameImg,
                  img: this.props.img,
                  priceImg: this.props.priceImg,
                  email:this.props.auth0.user.email
                }
                axios.post(`http://localhost:8000/cart`,reqBody).then(res=>{
                    console.log(res.data)
                })
       }
    render() {
        return (
            <div>
                <button className="profile--button update-btn" 
                         onClick={()=>{this.addToCart()}} > to cart</button>
            </div>
        )
    }
}

export default withAuth0(Cartmodel)
