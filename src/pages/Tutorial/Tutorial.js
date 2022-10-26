import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

const Tutorial = () => {
   
    const tutorials = useLoaderData()
    console.log(tutorials)
    const {image_url, details, title, category_id} = tutorials;
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
                    <div className='d-flex justify-content-between'>
                        <Link to={`/category/${category_id}`}><Button variant="primary">Go to back</Button></Link>
                        <Link><Button variant="primary">Get Access premium</Button></Link>
                    </div>
                </Card.Body>
            </Card>
            </Container>
        </div>
    );
};

export default Tutorial;