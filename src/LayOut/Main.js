import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Share/Header/Header';
import LeftSide from '../pages/Share/LeftSide/LeftSide';
import './Main.css'
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='4' className='d-none d-lg-block'>
                        <LeftSide></LeftSide>
                    </Col>
                    <Col lg='8'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;