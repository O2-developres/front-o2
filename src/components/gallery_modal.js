import React, { Component } from 'react'

 class gallery_modal extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.element.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <img src={this.props.element.image_url} alt="img" className="img-fluid"/>
                  <br></br>
                  {this.props.element.description}
             </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.hiddenModel}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )
    }
}

export default gallery_modal
