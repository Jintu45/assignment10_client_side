import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import LeftSide from '../LeftSide/LeftSide';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">IT Tech</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto d-flex align-items-center">
                        <Nav><Link className='menuBar' to='/'>Course</Link></Nav>
                        <Nav><Link className='menuBar' to='/faq'>FAQ</Link></Nav>
                        <Nav><Link className='menuBar' to='/blog'>Blog</Link></Nav>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">

                        </Nav.Link>
                        <div className='d-lg-none'>
                            <LeftSide></LeftSide>
                        </div>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;