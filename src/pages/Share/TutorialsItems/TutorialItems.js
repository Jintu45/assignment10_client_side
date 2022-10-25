import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './tutorialItems.css'
import { FaStar, FaUser, FaUserAlt } from 'react-icons/fa';
const TutorialItems = ({tutorial}) => {
    console.log(tutorial)
    const {title, image_url, details, author, rating, total_view} = tutorial;
    return (
        <div className='singleCard'>
           
            <Card className='m-3 p-2 border-white cardItem'>
                <Card.Img className='card-img' variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className='mb-1'>
                    <>
                        {
                            details.length > 60 ? 
                            <span>{details.slice(0, 60) + '... '}
                            </span>
                            :
                            <p className='mb-1'>{details}</p>
                        }
                    </>
                    </Card.Text>
                    <p className='mb-1 mt-1 lead'>{author.name}</p>
                    <p> <FaStar className='mb-1 text-warning'></FaStar> {rating.number}  <span className='ms-4'> <FaUserAlt className='text-warning'></FaUserAlt> {(total_view)}</span> </p>
                    <Button variant="primary">Details course</Button>
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default TutorialItems;