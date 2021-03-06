import React, { Component } from 'react'
import "../Store.css";
import axios from "axios";
import Header from './Header';
import Footer from './Footer';
import { withAuth0 } from "@auth0/auth0-react";
import { 
    Container,
     Row,
     Carousel
     } from 'react-bootstrap';

import img1 from '../Images/store-top1.jpg'
import img2 from '../Images/store-top2.jpg'
import img3 from '../Images/store-top3.jpg'
import Cartmodel from './Cartmodel';

class Store extends Component {
    constructor() {
        super();
        this.state = {
           listStore:[],
          
          };

    }

    componentDidMount = async () => {

        let url4 = `${process.env.REACT_APP_PORT}/store`;
        const axiosData4 = await axios.get(url4);

        console.log(axiosData4.data)

        
            this.setState({
                listStore:axiosData4.data
            })

    }

    deleteItem = (value) => {
        // email= ${this.props.auth0.user.email}
        const id=value._id
        const email=value.email
            axios.delete(`${process.env.REACT_APP_PORT}/admin/${id}?email=${email}`)
              .then((res) => {
                this.setState({
                    listStore:res.data
                })
              }).catch(error=>{alert(error.message)});
             
          };

 
    render() {
        return (
            <>
                <Header/>
                <>
                    <div className="store-carousel-contianer">
                        <div className="store-title-contianer">
                            <h2 className="store-qoute">“The object of <span className="suptext">art</span> is not to reproduce reality, but to create a reality of the same intensity.”</h2>
                        </div>
                        <Row className="store-carousel-section">
                        <Carousel className="store-carousel" variant="dark" controls="false">
                            <Carousel.Item>
                                <img
                                className="d-block"
                                src={img1} 
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block "
                                src={img3}
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block "
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
                    </div>
                    <Container className="store-card-contianer">
                    <Row className="store-card-row">
                        {
                            this.state.listStore.map((item,indx)=>{

                                return(<>
                                {
                                    item.userData.map((value,index)=>{
                                        return(<>
                                <div className="profile--card store-cards" >
                                <img src={value.img} alt="imag" />
                                <div className="profile--info">
                                <h1 className="profile--h1">{value.nameImg}</h1>
                                <p className="profile--p">  ${value.priceImg}</p>
                                <p className="profile--p"> by :{item.email}</p>

                                <Cartmodel img={value.img}
                                            nameImg={value.nameImg}
                                            priceImg={value.priceImg}
                                            email={item.email}
                                           
                                            />
                                {/* <StoreModal 
                                img={value.img}
                                nameImg={value.nameImg}
                                /> */}

                               
{
                    this.props.auth0.isAuthenticated &&
                    (this.props.auth0.user.email === ("ibrahem.omari96@gmail.com")) &&
                    <button  className="profile--button update-btn" onClick={()=>{this.deleteItem(item)}}>delete</button>
                }
                                
                                </div>

                                </div>
                                        
                                        </>)
                                    })
                                }
                                
                               
                                </>)
                                
                            })
                        }
                        
                        
                        
                    </Row>
                   
                    </Container>
                </>
                <Footer/>
            </>
        )
    }
}

export default withAuth0(Store)
