
import React, { Component } from 'react'
import   {Modal ,Button}  from "react-bootstrap";

class ModalProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
          show: false,
          
        };
      }
      handleModal() {
        this.setState({ show: !this.state.show });
      }

    render() {
        return (
            <>
            <Button onClick={() => {this.handleModal();}}  
                    
                    className="profile--button update-btn">show  </Button>
            <Modal
            className="profile-modal"
            show={this.state.show}
            onHide={() => this.handleModal()}
            closeButton
          >
            <Modal.Header
              className="profile-modal-header"
              closeButton
            >
              <h3>{this.props.title}</h3>
            </Modal.Header>
            <Modal.Body className="profile-modal-body">
              <img
                className="profile-modal-img"
                src={this.props.img}
              />
            </Modal.Body>
          </Modal>
          </>
        )
    }
}

export default ModalProfile
