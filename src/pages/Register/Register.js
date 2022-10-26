import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [error, setError] = useState('')
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photoURL.value;
        createUser(email, password) 
        .then(result => {
            const user = result.user
            setError('')
            form.reset()
        })
        .catch(error => {
            setError(error.message)
        })
    }
    return (
        <div>
            <Container>
                
                <Form onSubmit={handleSubmit} className='login-form'>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control type='text' name='name' placeholder='type your name' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                       
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Text className="text-danger">
                           {error}
                        </Form.Text>
                    <div className='text-center'>
                        <Button className='mt-2 px-5 ' variant="primary" type="submit">
                            Registration 
                        </Button>
                    </div>
                </Form>
    
                </Container>
        </div>
       
    );
};

export default Register;