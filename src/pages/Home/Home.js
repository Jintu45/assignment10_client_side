import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TutorialItems from '../Share/TutorialsItems/TutorialItems';
import './Home.css'
const Home = () => {
    const tutorials = useLoaderData()
    return (
        <div>
            <h1 className='text-center text-danger'>Our Services</h1>
            <div className='tutorial-card'>
            {
                tutorials.map(tutorial => <TutorialItems
                    key={tutorial._id}
                    tutorial={tutorial}
                ></TutorialItems>)
            }
            </div>
        </div>
    );
};

export default Home;