import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import logo from "../images/logo.png";
import '../css/LoginPopup.css';
import axios from 'axios';
import { useContext } from 'react'
import { StateContext } from "../App";



const LoginPopup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const state = useContext(StateContext).state
  const setState = useContext(StateContext).setState

  
  const handleClose = ({getData}) => {
    setShow(false); 
    console.log("data", {
      email,
      password
    })
    
    if(email!=undefined && password!=undefined){
      axios
      .post("https://fsdc18.azurewebsites.net/signin", {email, password})
      .then((response)=>{
        state.isLoggedIn = true;
        setState(JSON.parse(JSON.stringify(state)));
      })
      .catch((error) => console.log(error));
      state.isLoggedIn = true;
      setState(JSON.parse(JSON.stringify(state)));
    }
   
  }    
  return (<div>
    <Button variant="primary" onClick={handleShow} id="loginButton">
        login
      </Button>

      <Modal show={show} onHide={handleClose} id= "popUp">
        <Modal.Header closeButton id="header" onClick={handleClose}>
        <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-center"
              alt="logo"
             // id="logo"
            />
        </Modal.Header>
        <Modal.Body>
          <Form> 
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label class = "text">email</Form.Label>
              <Form.Control
              value={email}
                type="email"
                onChange={e => setEmail(e.target.value)}         
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label class = "text">password</Form.Label>
              <Form.Control
              value={password}
                type="password"
                onChange={e => setPassword(e.target.value)} 
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
         
          <Button variant="primary" type = "login" onClick={handleClose} id="submitFormButton">
            login
          </Button>
      </Modal>

  </div>)
}
/*
function LoginPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  return (
    <>
      <Button variant="primary" onClick={handleShow} id="loginButton">
        login
      </Button>

      <Modal show={show} onHide={handleClose} id= "popUp">
        <Modal.Header closeButton id="header">
        <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-center"
              alt="logo"
             // id="logo"
            />
        </Modal.Header>
        <Modal.Body>
          <Form> 
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label class = "text">username</Form.Label>
              <Form.Control
                type="username"
               // placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label class = "text">password</Form.Label>
              <Form.Control
                type="password"
               // placeholder=""
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
         
          <Button variant="primary" type = "login" onClick={handleClose} id="submitFormButton">
            login
          </Button>
      </Modal>
    </>
  );
  
}
*/
export default LoginPopup; 