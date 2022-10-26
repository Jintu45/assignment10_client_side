import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './Login.css'

const Login = () => {
    const {providerLogin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const googleHandler = (provider) => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            alert(error)
        })
    }
    return (
        <div>
             <Container>
                
                <Form className='login-form'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                       
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Text className="text-danger">
                           
                        </Form.Text>
                    <div className='text-center'>
                        <Button className='mt-4 px-5 ' variant="primary" type="submit">
                            Login 
                        </Button>
                        <p className='mt-3'>create have an account <Link to='/registration'>Create an account</Link> </p>
                    </div>
                </Form>
    
                    <div className='text-center googleSignIn'>
                        
                        <button onClick={googleHandler}><FaGoogle className='me-3 text-warning'></FaGoogle>Continue with google</button>
                    
                    </div>
                </Container>
        </div>
    );
};

export default Login;