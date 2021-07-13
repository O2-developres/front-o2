import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Gallery_Card from './Gallery_Card'
import img1 from '../Images/home-top1.jpg'
import { Row } from 'react-bootstrap'
import hornsdata from './data/hornsData.json'
import './Gallery_Card.css'

 class GalleryPage extends Component {
   
   constructor(props){
       super(props);
      
       this.state={
           rand:''
       }
   }
   
  

    render() {
     
            
       console.log(this.state.rand) 
    
        let temp=0;
        return (
            
           <>
           <Header/>
           <div className='top-gallery-card' >
               
           <Row xs={1} md={4} className="g-3" >
               {
                    hornsdata.map((item , indx) =>{
                      indx=temp;
                      let  months = ['500px', '300px', '700px'];
                      let  random = Math.floor(Math.random() * months.length)
                      let randWidth='';
                      randWidth=months[random];


                      return <Gallery_Card img={item.image_url} width={randWidth}/>
                    })

               }
          
           </Row>
           </div>
           </>
        )
    }
}

export default GalleryPage
