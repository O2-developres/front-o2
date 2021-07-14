import React, { Component } from "react";
import "./Gallery_Card.css";
import FavModel from "./FavModel";

export class Gallery_Card extends Component {
  constructor() {
    super();
    this.state = {
      showmodal: false,
    };
  }

  zoomimage = () => {
    this.setState({
      showmodal: true,
    });
  };

  render() {
    return (
      <>
        
          <div className="profile--card parentgallery" style={{margin:'20px'}}>
            <img src={this.props.img} alt="imag" className="childgallery" />
            <div className="profile--info">
              <h1 className="profile--h1">{this.props.nameImg}</h1>
            

              <FavModel img={this.props.img}
                                            nameImg={this.props.nameImg}
                                            />
               
            </div>
          </div>

         
      </>
    );
  }
}

export default Gallery_Card;
