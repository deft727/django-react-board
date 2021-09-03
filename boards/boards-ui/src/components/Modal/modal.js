import React, { useState } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'

function MyModal() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>


      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Heading Text</Modal.Title>
        </Modal.Header>

        <Modal.Body>Modal content will sit here</Modal.Body>

        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Submit</Button>

        </Modal.Footer>

      </Modal>

    </div>
  );
}

export default MyModal;