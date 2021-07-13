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
//   getInputName=(e)=>{
//     this.setState({
//         imgName:e.target.value,
//     })
//   }
//   getInputImg=(e)=>{
//     this.setState({
//         imgUrl:e.target.value,
//     })
//   }
//   getPrice=(e)=>{
//     this.setState({
//         priceImg:e.target.value,
//     })
//   }
//   //  =================== this function will used in store page 
//   createBook= async(e)=>{

//   //  email= ${this.props.auth0.user.email} also env for link 
//     e.preventDefault();
//     const reqBody={
//       nameImg: this.state.imgName,
//       img: this.state.imgUrl,
//       priceImg:this.state.priceImg,
//       email:this.props.auth0.user.email
//     }
//    let Data=await axios.post(`http://localhost:8000/cart`,reqBody)

//     console.log(Data)
//     this.setState({
//         listUser:Data.data.cart
//     })
    

// }
// ======================================== end for function store 

  componentDidMount = async () => {
    // let url = `http://localhost:8000/gallary?q=paint`;
    // const axiosData = await axios.get(url);

    // let url2 = `http://localhost:8000/news?q=america`;
    // const axiosData2 = await axios.get(url2);
    
    // console.log(axiosData2);
    // console.log(axiosData);



   //  email= ${this.props.auth0.user.email} also env for link 
    let url3 = `http://localhost:8000/profile?email=${this.props.auth0.user.email}`;
    const axiosData3 = await axios.get(url3);
    console.log(axiosData3);

    this.setState({
    //   listGallary: axiosData.data,
      listUser: axiosData3.data.cart,
    });
    
      


  };
//  ===============================  start for delete Cart
  deletCart = (indx) => {
//  email= ${this.props.auth0.user.email} also env for link
    axios
      .delete(`http://localhost:8000/cart/${indx}?email=${this.props.auth0.user.email}`)
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
        <div
          className="background-cart-img"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Header />
          <Container>
         
            <div className="container-div">

            
              {
              
              this.state.listUser.map((item, indx) => {
                  
                  this.state.total+=Number(item.price)
                return (
                  <>
                    <div className="collection">
                      <li
                        className="collection-item avatar"
                        //    key={item.id}
                      >
                        <div className="item-img">
                          <Image src={item.img} rounded height="160px" />
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
