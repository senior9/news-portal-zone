import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
      <Row>
      <Col sm={2}>sm=4</Col>
        <Col sm={8} className='text-center'>Main Content Comming Soo.......!!!</Col>
        <Col sm={2}>sm=4</Col>
      </Row>
      
    </Container>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;