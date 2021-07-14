import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import GalleryCard from './GalleryCard'
import { Row ,Button} from 'react-bootstrap'
import './Gallery_Card.css'
import axios from "axios";


 class GalleryPage extends Component {
   
   constructor(props){
       super(props);
      
       this.state={
           rand:'',
           paint:[]
       }
   }
   componentDidMount=async()=>{
    let url=`${process.env.REACT_APP_PORT}/gallary?q=modernism art`
    const axiosData = await axios.get(url);
    console.log(axiosData.data)
    this.setState({
        paint:axiosData.data
    })

   }
//    ==========================================
   famousArt= async()=>{
    let url=`${process.env.REACT_APP_PORT}/gallary?q=famous art`
    const axiosData = await axios.get(url);

    this.setState({
        paint:axiosData.data
    })
  }
//   ======================================
  expressionism= async()=>{
    let url=`${process.env.REACT_APP_PORT}/gallary?q=expressionism art`
    const axiosData = await axios.get(url);

    this.setState({
        paint:axiosData.data
    })
  }
//   =======================================
charcoal= async()=>{
    let url=`${process.env.REACT_APP_PORT}/gallary?q=charcoal drawing`
    const axiosData = await axios.get(url);

    this.setState({
        paint:axiosData.data
    })
  }
//   =====================================
drawing= async()=>{
    let url=`${process.env.REACT_APP_PORT}/gallary?q=drawing `
    const axiosData = await axios.get(url);

    this.setState({
        paint:axiosData.data
    })
  }
//   ====================================
  aerial= async()=>{
    let url=`${process.env.REACT_APP_PORT}/gallary?q=aerial perspective art `
    const axiosData = await axios.get(url);

    this.setState({
        paint:axiosData.data
    })
  }
//   =====================================
modernism= async()=>{
    let url=`${process.env.REACT_APP_PORT}/gallary?q=modernism art `
    const axiosData = await axios.get(url);

    this.setState({
        paint:axiosData.data
    })
  }

    render() {
     
            
       console.log(this.state.rand) 
    
        let temp=0;
        return (
           <>
           <Header/>
           <h1 style={{textAlign:'center',
                        marginTop:'70px',
                        fontFamily:"'Roboto', sans-serif"
                        }}>Gallery</h1>
        <div className="gallary-filter-btn-group">
            <Button onClick={()=>{this.famousArt()}} className="gallary-filter-btn">famous Art</Button>
            <Button onClick={()=>{this.expressionism()}} className="gallary-filter-btn">expressionism Art</Button>
            <Button onClick={()=>{this.charcoal()}} className="gallary-filter-btn">charcoal drow</Button>
            <Button onClick={()=>{this.drawing()}} className="gallary-filter-btn">drawing</Button>
            <Button onClick={()=>{this.aerial()}} className="gallary-filter-btn">aerial</Button>
            <Button onClick={()=>{this.modernism()}} className="gallary-filter-btn">modernism</Button>
            </div>
           <div className='top-gallery-card '  style={{marginLeft:'40px'}}>
               
           <Row xs={1} md={6} className="g-3"  >
               {
                    this.state.paint.map((item , indx) =>{
                      indx=temp;
                      let  months = ['500px', '300px', '700px'];
                      let  random = Math.floor(Math.random() * months.length)
                      let randWidth='';
                      randWidth=months[random];


                      return <GalleryCard img={item.img} 
                                        nameImg={item.name}width={randWidth} />
                      
                      
                    })

               }
          
           </Row>
           </div>
           <Footer/>
          
           </>
        )
    }
}

export default GalleryPage
