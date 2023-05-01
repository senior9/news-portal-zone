import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <Navbar className="mt-5" bg="light" variant="light">
        <Container>
          <Nav className="me-auto mx-auto">
            <Nav.Link ><Link className="text-decoration-none text-secondary" to="/category/0">Home</Link></Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
            <Nav.Link to="/carrer">Carrer</Nav.Link>
          </Nav>
          <div>
            <FaUserCircle className="icon "/>
            <Link to="/login"><button className="btn btn-dark mx-2">Login</button></Link>
          </div>
        </Container>
      </Navbar>
    );
};

export default NavigationBar;