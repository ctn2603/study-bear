
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { json, Link } from 'react-router-dom';
import '../css/SignUpForm.css';
import studybear from '../images/studybear.png';
import axios from 'axios';
import { Box } from '@chakra-ui/react'
import { useContext } from 'react'
import { StateContext } from "../App";

const SignUpForm = () => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const state = useContext(StateContext).state
  const setState = useContext(StateContext).setState

  const onSubmit = ({getData}) => {
    console.log("data", {
      email,
      username,
      password
    })

    
    axios
    .post("https://fsdc18.azurewebsites.net/signup", {email, username, password })
    .then((response)=>{
      state.isLoggedIn = true;
      setState(JSON.parse(JSON.stringify(state)));
    })
    .catch((error) => console.log(error));
  }
  
  
  return (<div id ="bigDiv">
   
    <img src={studybear} id= "studybearLogo"/>

    <div id="backgroundDiv"> 
    <h1 id= "signUpTitle"> sign up </h1>
    
    <input type="text" class= "textField" value={email} placeholder=" email" onChange={e => setEmail(e.target.value)}  />

    <input type="text" class= "textField" value={username} placeholder=" username" onChange={e => setUsername(e.target.value)}  />

    <input type="password" class= "textField" value={password} placeholder=" password" onChange={e => setPassword(e.target.value)}  />   
    
    </div>

    <Link to='/'><button onClick={onSubmit} id="submitButton">submit</button></Link>

  </div>)
    
}
  



/*
function SignUpForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  

  return (
    <div id="bigDiv">
      <img src={studybear} id= "studybearLogo"/>

    <Form noValidate validated={validated} onSubmit={handleSubmit} id= "signUpDiv">
      <h1 id= "signUpTitle"> sign up </h1>
     <div id = "formDiv">
        
        
        <Form.Group as={Col} md="6" controlId="validationCustom03" id= "textField">
          <Form.Control type="text" placeholder="email" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid UC Berkeley Email.
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} md="4" controlId="validationCustomUsername" id= "textField">
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="username"
              aria-describedby="inputGroupPrepend"
              required
              
              
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="formPlaintextPassword" id= "textField">
          <Form.Control type="password" placeholder="password" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
      
      </div>
    </Form>
    <a href= "http://localhost:3000/">
      <button type="submit" id="submitButton">submit</button>
    </a>

    </div>
  );
}*/

export default SignUpForm;