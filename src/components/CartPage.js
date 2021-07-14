import React, { Component } from "react";
import background from "../images/img8.jpg";
import { Button, Container, Image, Modal } from "react-bootstrap";
import "../CartPage.css";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";

export class Cart extends Component {
  constructor() {
    super();
    this.state = {
      listGallary: [],
      listUser: [],
       total:0,
       imgName:'',
       imgUrl:'',
       priceImg:''
    };
  }

// ======================================== end for function store 

  componentDidMount = async () => {

    let url3 = `${process.env.REACT_APP_PORT}/profile?email=${this.props.auth0.user.email}`;
    const axiosData3 = await axios.get(url3);
    console.log(axiosData3);

    this.setState({
      listUser: axiosData3.data.cart,
    });
    
      


  };
//  ===============================  start for delete Cart
  deletCart = (indx) => {
    axios
      .delete(`${process.env.REACT_APP_PORT}/cart/${indx}?email=${this.props.auth0.user.email}`)
      .then((res) => {
        this.setState({
          listUser: res.data.cart,
        });
      });
      
  };

  //  ===============================  end for delete Cart

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
      <Header />
        <div
          className="background-cart-img"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          
          <Container>
         

            
              {
              
              this.state.listUser.map((item, indx) => {
                  
                  this.setState({total:this.state.total+Number(item.price)})
                return (
                  <>
                    <div className="collection">
                      <li
                        className="collection-item avatar"
                        //    key={item.id}
                      >
                        <div className="item-img">
                          <Image src={item.img} alt="img" rounded height="160px" />
                        </div>

                        <div className="item-desc">
                          <span className="title">{item.nameImg}</span>
                         
                          <p>
                            <b>Price:{item.price} </b>
                          </p>
                          <Button
                            className="remove-button"
                            variant="danger"
                            onClick={(e) => {
                              this.deletCart(indx);
                            }}
                          >
                            remove
                          </Button>
                        </div>
                      </li>
                    </div>
                  </>
                );
              })}
              <li className="collection-item">
                <b>
                  Total:{this.state.total}
                  $
                </b>
              </li>
              <hr />
              <div className="cart-check-btn">
              <Button  className="cheackout-button" variant="success" size="lg" onClick={this.showModal}>
                Checkout
              </Button>
              </div>
             {/* ------------------------------------ Add Modal ----------------------------------------------- */}

             <Modal show={this.state.show} onHide={this.hideModal}>
                    <Modal.Header>
                    <Modal.Title><h2>Thank You</h2></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <p>Your Order has been sent</p>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.hideModal}> Close</Button>
                    </Modal.Footer>
                </Modal>
          </Container>
        </div>
        <Footer/>
      </>
    );
  }
}

export default withAuth0(Cart);
