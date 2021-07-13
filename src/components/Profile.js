import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import "../Profile.css";
import Header from "./Header";
import axios from "axios";
import { Container, Row, Alert, Tab, Nav, Col, Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import ibrahemPic from "../Images/ibrahem-profile.jpg";
import ModalProfile from "./ModalProfile";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUserDAta: [],
      listFav: [],
      nameImg:'',
      img:'',
      description:'',
      priceImg:'',
      

    };
  }
// email= ${this.props.auth0.user.email}
  componentDidMount = async () => {  //here we need env for link also for eamil we need auth0 
    let url = `http://localhost:8000/profile?email=${this.props.auth0.user.email}`;
    const axiosData = await axios.get(url).catch(error=>{alert(error.message)});
    console.log(axiosData.data);
    if(axiosData.data!==null){
      this.setState({
      
        listUserDAta: axiosData.data.userData,
        listFav:axiosData.data.favImg
    });
    }
    
  };
//   ==========================  start for delete pic
  deletFav = (indx) => {
// email= ${this.props.auth0.user.email}
    axios.delete(`http://localhost:8000/favorite/${indx}?email=${this.props.auth0.user.email}`)
      .then((res) => {
        this.setState({
            listFav:res.data.favImg
        })
      }).catch(error=>{alert(error.message)});
     
  };


  deletpicture = (indx) => {
// email= ${this.props.auth0.user.email}
    axios.delete(`http://localhost:8000/profile/${indx}?email=${this.props.auth0.user.email}`)
      .then((res) => {
        this.setState({
         
            listUserDAta: res.data.userData,
        });
      }).catch(error=>{alert(error.message)});
      
  };

//   ========================== end delete pic
//   =========================start put updata 
    editPicture=(e,index)=>{

// email= ${this.props.auth0.user.email}
// we need form for updata 
    e.preventDefault();
    const reqBody={
        email:this.props.auth0.user.email,
        img:"https://www.si.com/.image/t_share/MTgyMTEwNzg0MzAwNTI0ODcy/lionel-messi-points-up-copa-america.jpg",
        nameImg:"messi",
        description:"the gooat messi",
        priceImg:"10000"
      
    }
    axios.put(`http://localhost:8000/profile/${index}`,reqBody).then(res=>{
      this.setState({
        listUserDAta: res.data.userData,
      })
    }).catch(error=>{alert(error.message)});
    
}
// ================= end put 
// ================ start for create new pic 


getInputName=(e)=>{
    this.setState({
        nameImg:e.target.value,
    })
  }
  getInputImg=(e)=>{
    this.setState({
        img:e.target.value,
    })
  }
  getInputDescrip=(e)=>{
    this.setState({
        description:e.target.value,
    })
  }
  getInputPrice=(e)=>{
    this.setState({
        priceImg:e.target.value,
    })
  }

createPic=(e)=>{
// email= ${this.props.auth0.user.email} also env for link
    e.preventDefault();
    const reqBody={
        email:this.props.auth0.user.email,
        img:this.state.img,
        nameImg:this.state.nameImg,
        description:this.state.description,
        priceImg:this.state.priceImg,
    }
    axios.post(`http://localhost:8000/profile`,reqBody).then(res=>{
      this.setState({
        listUserDAta: res.data.userData,

      })
    }
      
    ).catch(error=>{alert(error.message)})
    
    e.target.reset();
  }
//  ====================== end craete pic


  render() {
    return (
      <div>
        <Header />
        <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

        <header id="header">
          <div className="d-flex flex-column">
            <div className="profile">
              <img src={this.props.auth0.user.picture} />
              <h1 className="text-light">{this.props.auth0.user.name}</h1>
              <div className="social-links mt-3 text-center">
                <a href="#" className="twitter">
                  <FaTwitter />
                </a>
                <a href="#" className="facebook">
                  <FaFacebook />
                </a>
                <a href="#" className="instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="linkedin">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <nav id="navbar" className="nav-menu navbar">
              <ul>
                <li>
                  <a href="#hero" className="nav-link scrollto active">
                    <i className="bx bx-home"></i> <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="nav-link scrollto">
                    <i className="bx bx-book-content"></i> <span>Gallary</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <section
          id="hero"
          className="d-flex flex-column justify-content-center align-items-center"
          style={{
            background:
              'url("https://i.pinimg.com/originals/45/cf/a8/45cfa8e8fef45c356253cf9938a4cc9c.jpg") top right',
            width: "80%",
            height: "100vh",
            backgroundSize: "100rem",
            marginLeft: "20rem",
          }}
        >
          <div className="hero-container">
            <h1>{this.props.auth0.user.name}</h1>
            <p>Artist</p>
            <div className="hero-img-contianer">
              <img className="hero-img-main" src={this.props.auth0.user.picture}/>
            </div>
          </div>
        </section>

        <main id="main">
          <section id="portfolio" className="portfolio section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Gallary</h2>
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-lg-12 d-flex justify-content-center"></div>
              </div>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="gallary-section">
                  <Col sm={1}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Picture</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Favorite</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="theard">Add</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={1}></Col>
                  <Col sm={10}>
                    {/*  */}
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        {/* 
                        
                        for
                        */}

                        {this.state.listUserDAta&&
                        this.state.listUserDAta.map((item, indx) => {
                          return (
                            <>
                              <div
                                className="profile--card"
                                
                              >
                                <img src={item.img} />
                                <div className="profile--info">
                                  <h1 className="profile--h1">
                                    {item.nameImg}
                                  </h1>
                                  <p className="profile--p">
                                    {item.description}
                                  </p>
                                 
                                  <ModalProfile  img={item.img} 
                                          title={item.nameImg}  />
                                  <button className="profile--button delete-btn" onClick={(e) => {
                                this.deletpicture(indx);
                              }}>
                                    Delete
                                  </button>
                                </div>
                                
                              </div>
                              
                              
                            </>
                          );
                        })}

                     
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        


                        {
                        this.state.listUserDAta&&
                        this.state.listFav.map((item,indx)=>{
                            return (<>
                            
                            <div
                          className="profile--card"
                          onClick={() => {
                            this.handleModal();
                          }}
                        >
                          <img src={item.img} />
                          <div className="profile--info">
                            <h1 className="profile--h1">{item.nameImg}</h1>
                            <ModalProfile  img={item.img} 
                                          title={item.nameImg}  />
                            <button className="profile--button  delete-btn"
                            onClick={(e) => {
                                this.deletFav(indx);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                        
                            
                            </>)
                        })}
                        
                       
                      </Tab.Pane>
                      <Tab.Pane eventKey="theard">
                        <form className="profile-add-form" onSubmit={(e)=>{this.createPic(e)}}>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="Title"
                            onChange={(e)=>{this.getInputName(e)}}/>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="Description"
                            onChange={(e)=>{this.getInputDescrip(e)}}/>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="Image Url"
                            
                            onChange={(e)=>{this.getInputImg(e)}}/>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="Price"
                            onChange={(e)=>{this.getInputPrice(e)}}/>
                          <Button variant="success" type="submit">Add</Button>
                        </form>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>

              <Container className="profile-gallary-contianer">
                <Row></Row>
              </Container>
            </div>
          </section>
        </main>

        <footer id="footer">
          <div className="container"></div>
        </footer>
      </div>
    );
  }
}

export default withAuth0(Profile);
