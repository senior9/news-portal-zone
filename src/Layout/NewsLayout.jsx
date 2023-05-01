import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RightNavbar from "../Shared/RightNavBar/RightNavbar";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
    return (
        <div>
    <Header></Header>
      <Container className="mt-5">
        <Row>
          <Col sm={9} className="text-center">
            <Outlet></Outlet>
          </Col>
          <Col sm={3}><RightNavbar></RightNavbar></Col>
        </Row>
      </Container>
      <Footer></Footer>
        </div>
    );
};

export default NewsLayout;