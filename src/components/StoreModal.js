import React, { Component } from 'react'
import "../Store.css";
import { 
    Modal,
    Button
     } from 'react-bootstrap';
class StoreModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }}

    handleModal(){
        this.setState({show:!this.state.show})
    }
 
    render() {
        return (
            <>
                <Button className="profile--button update-btn" variant="warning" onClick={()=>this.handleModal()}>Show</Button>
                  <Modal className="profile-modal" show={this.state.show} onHide={()=>this.handleModal()} closeButton>
                    <Modal.Header className="profile-modal-header" closeButton><h3>{this.props.nameImg}</h3></Modal.Header>
                    <Modal.Body className="profile-modal-body">
                        <img 
                            className="profile-modal-img"
                            src={this.props.img}
                            alt="imag"
                        />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default StoreModal
