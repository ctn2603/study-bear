
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import '../css/SignUpForm.css';
import studybear from '../images/studybear.png';

function SignUpForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
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
      <button id="submitButton">submit</button>
    </a>

    </div>
  );
}

export default SignUpForm;