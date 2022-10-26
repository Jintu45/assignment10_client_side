import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const Tutorial = () => {
   
    const tutorials = useLoaderData()
    console.log(tutorials)
    const {image_url, details, title, category_id, course_fee, rating} = tutorials;
    return (
        <div>
            <Container>
            <Card className='p-4 mb-4'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {details}
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                        <span className='mb-3'> <FaStar className='text-warning mb-1'></FaStar> {rating.number}</span>
                    <span className='d-flex justify-content-end align-items-center mb-3 lead'>course fee: <h4 className='mb-0 text-muted'> ${course_fee}</h4></span>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <Link to={`/category/${category_id}`}><Button variant="dark">Go to back</Button></Link>
                        <Link to='/course'><Button variant="primary">Get Access premium</Button></Link>
                    </div>
                </Card.Body>
            </Card>
            </Container>
        </div>
    );
};

export default Tutorial;