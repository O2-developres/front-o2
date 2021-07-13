import React, { Component } from 'react'
import { Card , Button , Col } from 'react-bootstrap'
import './Gallery_Card.css'

export class Gallery_Card extends Component {
 constructor(){
   super();
   this.state={
     showmodal:false
   }
 }

 zoomimage=()=>{
   this.setState({
     showmodal:true
   })
 }
 
    render() {
     
        return (

            <>
         
         
          
            <Col className="parentgallery">
            {/* <Card className="gallery-card-class" style={ {marginTop:'10px',width:'350px' , height:this.props.width}}>
  <Card.Img variant="top" src={this.props.img}height={this.props.width}/>

</Card> */}
<img className="childgallery" src={this.props.img}height='100%'width='100%'style={{paddingBottom:'10px'}} />
</Col>

{/* <div className="col-lg-4 mb-4 mb-lg-0">
<img src={this.props.img}height={this.props.width}width='100%'/>
</div> */}
            </>
        )
    }
}

export default Gallery_Card
