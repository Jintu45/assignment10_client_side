import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import LeftSide from '../LeftSide/LeftSide';
import './Header.css'
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../../../Theme/Theme";
import img from '../../../img/logo1.png'
import { FaCloudMoon, FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
const Header = () => {
    const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

    const {user, logOut} = useContext(AuthContext)

    const logOutHandler = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error))
    }
    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/"> <img className='logo-img' src={img} alt="" /> IT Tech</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ms-5 d-flex align-items-center">
                        <Nav><Link className='menuBar' to='/'>Course</Link></Nav>
                        <Nav><Link className='menuBar' to='/faq'>FAQ</Link></Nav>
                        <Nav><Link className='menuBar' to='/blog'>Blog</Link></Nav>
                        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                            <GlobalStyles />
                            <StyledApp>
                                <button className='themeButton' onClick={() => themeToggler()}> <FaCloudMoon className='theme'></FaCloudMoon> </button>
                            </StyledApp>
                        </ThemeProvider>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button className='ms-2' onClick={logOutHandler} variant="danger">Logout</Button>
                                    </>
                                :
                                <>
                                    <Link className='ms-2 me-2' to='/login'><Button variant="primary">Login</Button></Link>
                                    <Link to='/register'><Button variant="info">Register</Button></Link>
                                </>
                            }
                        </Nav.Link>
                        <Nav.Link className='d-flex align-items-center' eventKey={2} href="#memes">
                            {
                                user?.photoURL ?
                                <Image style={{height:'40px'}} roundedCircle src={user.photoURL}></Image> :
                                <FaUser></FaUser>
                            }
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