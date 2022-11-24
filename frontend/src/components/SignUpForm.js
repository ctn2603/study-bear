
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import '../css/SignUpForm.css';

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
    <Form noValidate validated={validated} onSubmit={handleSubmit} id= "signUpDiv">
      <Row className="mb-3" class="row">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>first name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="first name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
       
      </Row>
      <Row className="mb-3" class="row">
        
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>email</Form.Label>
          <Form.Control type="text" placeholder="name@berkeley.edu" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid UC Berkeley Email.
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>username</Form.Label>
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
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
    </div>
  );
}

export default SignUpForm;