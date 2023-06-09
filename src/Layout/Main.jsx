import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftnavBar from "../Shared/LeftNavBar/LeftnavBar";
import RightNavbar from "../Shared/RightNavBar/RightNavbar";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container className="mt-5">
        <Row>
          <Col sm={2} ><LeftnavBar></LeftnavBar></Col>
          <Col sm={8} className="text-center">
            <Outlet></Outlet>
          </Col>
          <Col sm={2}><RightNavbar></RightNavbar></Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
