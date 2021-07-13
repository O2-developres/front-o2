import React, { Component } from "react";
import background from "../images/img8.jpg";
import { Button, Container, Image } from "react-bootstrap";
import "../CartPage.css";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

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
  getInputName=(e)=>{
    this.setState({
        imgName:e.target.value,
    })
  }
  getInputImg=(e)=>{
    this.setState({
        imgUrl:e.target.value,
    })
  }
  getPrice=(e)=>{
    this.setState({
        priceImg:e.target.value,
    })
  }
  createBook= async(e)=>{
    e.preventDefault();
    const reqBody={
      nameImg: this.state.imgName,
      img: this.state.imgUrl,
      priceImg:this.state.priceImg,
      email:'anofal719@gmail.com'
    }
   let Data=await axios.post(`http://localhost:8000/cart`,reqBody)

    console.log(Data)
    this.setState({
        listUser:Data.data.cart
    })
    window.location.reload()

}
  componentDidMount = async () => {
    // let url = `http://localhost:8000/gallary?q=paint`;
    // const axiosData = await axios.get(url);

    // let url2 = `http://localhost:8000/news?q=america`;
    // const axiosData2 = await axios.get(url2);
    let url3 = `http://localhost:8000/profile?email=anofal719@gmail.com`;
    const axiosData3 = await axios.get(url3);
    let url4 = `http://localhost:8000/store`;
    const axiosData4 = await axios.get(url4);

    console.log(axiosData3);

    for (let i=0 ;i<10;i++ ){

      console.log(axiosData4.data[i]);
    }
    // console.log(axiosData2);
    // console.log(axiosData);
    this.setState({
    //   listGallary: axiosData.data,
      listUser: axiosData3.data.cart,
    });
    
      


  };

  deletCart = (indx) => {

    axios
      .delete(`http://localhost:8000/cart/${indx}?email=anofal719@gmail.com`)
      .then((res) => {
        this.setState({
          listUser: res.data.cart,
        });
      });
      window.location.reload()
  };
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
<form onSubmit={(e)=>{this.createBook(e)}}>
          <input type="text" onChange={(e)=>{this.getInputName(e)}} required placeholder='name '/><br/>

          <input type="text" onChange={(e)=>{this.getInputImg(e)}} required placeholder='img '/>
          <br/>

          <input type="text" onChange={(e)=>{this.getPrice(e)}} required placeholder='price'/>
          <br/>
          
          <Button variant="dark" type="submit" >add new img </Button>
          
        </form>
              <li className="collection-item">
                <b>
                  Total:{this.state.total}
                  $
                </b>
              </li>
              <hr />
              <Button className="cheackout-button" variant="success" size="lg">
                Checkout
              </Button>
            </div>
          </Container>
        </div>
        <Footer/>
      </>
    );
  }
}

export default Cart;
