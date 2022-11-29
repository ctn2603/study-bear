import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import logo from "../images/books.png";
import '../css/LoginPopup.css';

function LoginPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button id="loginButton" onClick={handleShow}>
        login
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-center"
              alt="books emoji"
            />
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>username</Form.Label>
              <Form.Control
                type="username"
               // placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
               // placeholder=""
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" type = "login" onClick={handleClose}>
            login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginPopup;