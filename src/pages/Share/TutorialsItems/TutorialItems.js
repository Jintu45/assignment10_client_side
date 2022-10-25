import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './tutorialItems.css'
const TutorialItems = ({tutorial}) => {
    console.log(tutorial)
    const {title, image_url, details, author} = tutorial;
    return (
        <div className='singleCard'>
            <Container>
            <Card className='mb-4 p-5 border-white cardItem'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Container>
        </div>
    );
};

export default TutorialItems;