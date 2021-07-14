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
                        marginTop:'70px'}}>Gallery</h1>

            <Button onClick={()=>{this.famousArt()}} style={{marginLeft:'40px'}}>famous Art</Button>
            <Button onClick={()=>{this.expressionism()}} style={{marginLeft:'40px'}}>expressionism Art</Button>
            <Button onClick={()=>{this.charcoal()}} style={{marginLeft:'40px'}}>charcoal drow</Button>
            <Button onClick={()=>{this.drawing()}} style={{marginLeft:'40px'}}>drawing</Button>
            <Button onClick={()=>{this.aerial()}} style={{marginLeft:'40px'}}>aerial</Button>
            <Button onClick={()=>{this.modernism()}} style={{marginLeft:'40px'}}>modernism</Button>
          
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
