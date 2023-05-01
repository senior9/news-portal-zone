import React from 'react';
import "./Login.css";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <Container className='login-form mt-5'>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email"  required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Text>
        Dont't Have An Account ? <Link className="text-decoration-none text-danger" to='/register'>Register</Link>
        </Form.Text>
      </Form.Group>

      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
        </Container>
    );
};

export default Login;