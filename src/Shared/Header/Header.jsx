import React from "react";
import logo from "../../../src/assets/logo.png";
import moment from "moment";
import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="text-center mt-5 text-secondary container">
                        {/* sITE lOGO */}
      <img src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p className="date">{moment().format("dddd, MMMM Do YYYY")}</p>

                    {/* lATEST NEWS  */}
      <div className="latest py-3">
        <div className="d-flex jalign-items-center latest-news">
          <button className="btn btn-danger w-25 m-2">Latest</button>
          <marquee>
            {" "}
            <p className="text-center">
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </p>
          </marquee>
        </div>
      </div>
                    {/* NAVBAR */}
      <div>
      <Navbar className="mt-5" bg="light" variant="light">
        <Container>
          <Nav className="me-auto mx-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
            <Nav.Link to="/carrer">Carrer</Nav.Link>
          </Nav>
          <div>
            <FaUserCircle className="icon"/>
            <button className="btn btn-dark mx-2">Login</button>
          </div>
        </Container>
      </Navbar>
      </div>
    </div>
  );
};

export default Header;
