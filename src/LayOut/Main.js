import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/Share/Header/Header';
import LeftSide from '../pages/Share/LeftSide/LeftSide';
import RightSide from '../pages/Share/RightSide/RightSide';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='4'>
                        <LeftSide></LeftSide>
                    </Col>
                    <Col lg='8'>
                        <RightSide></RightSide>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;