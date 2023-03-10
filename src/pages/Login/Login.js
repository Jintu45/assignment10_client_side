import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './Login.css'

const Login = () => {
    const {providerLogin, signIn} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const githubProvider = new GithubAuthProvider()
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
    const gitHubHandler = (provider) => {
        providerLogin(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })
    }
    const signInHandle = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password) 
        .then(result => {
            const user = result.user
            form.reset()
            setError('')
            navigate(from, {replace: true})
        })
        .catch(error => {
            setError(error.message)
        })
    }
    return (
        <div>
             <Container>
                
                <Form onSubmit={signInHandle} className='login-form'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                       
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Text className="text-danger">
                           {error}
                        </Form.Text>
                    <div className='text-center'>
                        <Button className='mt-4 px-5 ' variant="primary" type="submit">
                            Login 
                        </Button>
                        <p className='mt-3'>create have an account <Link to='/register'>Create an account</Link> </p>
                    </div>
                </Form>
    
                    <div className='text-center googleSignIn'>
                        
                        <button onClick={googleHandler}><FaGoogle className='me-3 text-warning'></FaGoogle>Continue with Google</button>
                        <br />
                        <button onClick={gitHubHandler}><FaGithub className='me-3 text-warning'></FaGithub>Continue with Github</button>
                    </div>
                </Container>
        </div>
    );
};

export default Login;