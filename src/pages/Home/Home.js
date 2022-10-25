import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TutorialItems from '../Share/TutorialsItems/TutorialItems';

const Home = () => {
    const tutorials = useLoaderData()
    return (
        <div>
            <h2>total tutorials {tutorials.length}</h2>
            {
                tutorials.map(tutorial => <TutorialItems
                    key={tutorial._id}
                    tutorial={tutorial}
                ></TutorialItems>)
            }
        </div>
    );
};

export default Home;