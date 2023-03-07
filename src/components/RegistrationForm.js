import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const RegistrationForm = () => {

  const { user, registerNewUser } = useAuth();
  const [updatedUser, setUpdatedUser] = useState(user);
  const [editing, setEditing] = useState(true);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    role: 2,
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerNewUser(updatedUser);
    setEditing(false);
  };

  return (
    <Container>
      <Row>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit} className="my-10 mx-3">
            <Form.Group controlId="formFirstName">
              <Form.Label className='mt-2'>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label className='mt-2'>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label className='mt-2'>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label className='mt-2'>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label className='mt-2'>Phone</Form.Label>
              <Form.Control
                type="phone"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label className='mt-2'>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                />  
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
                <Form.Label className='mt-2'>Confirm Password</Form.Label>
                <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
            </Form.Group>
            <button type="button" className="btn btn-outline-dark mt-3" onClick={handleChange}>
                Submit form
            </button>
            </Form>
        </Col>
        </Row>
    </Container>
    );
};

export default RegistrationForm;

