import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import img1 from '../images/img3.jpg'
import background from '../images/img8.jpg'
import {Button,Container,Image } from 'react-bootstrap';
import '../CartPage.css'
import Header from './Header';
import Footer from './Footer';

export class Cart extends Component {
    render() {
        return (
            <>
                <div className="background-cart-img"
                    style={{
                        backgroundImage: `url(${background})`,
                        backgroundSize: "cover",
                        backgroundRepeat: 'no-repeat',
                   
                    }}
                >
                    <Header />
                    <Container>
                        <div className="container-div">
                            <div className="collection">
                                <li className="collection-item avatar"
                                //    key={item.id}
                                >
                                    <div className="item-img"> 
                                    <Image src={img1} rounded height="160px" />
                                      
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">title</span>
                                        {/* <p>description:</p> */}
                                        <p><b>Price: </b></p> 
                                        <Button className="remove-button" variant="danger">remove</Button>
                                    </div>
                                </li>
                            </div>
                            <li className="collection-item"><b>Total:
                                {/* {this.props.total} */}
                                $
                            </b></li><hr />
                            <Button className="cheackout-button" variant="success" size="lg" >
                               Checkout
                            </Button>
                                </div>
                                </Container>
                                </div>
                                <Footer/>

            </>
        )
    }
}

export default Cart
