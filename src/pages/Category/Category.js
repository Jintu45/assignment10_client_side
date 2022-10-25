import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TutorialItems from '../Share/TutorialsItems/TutorialItems';

const Category = () => {
    const tutorials = useLoaderData()
    return (
        <div>
            <h2 className='text-center'>Single Card Item</h2>
            {
                tutorials.map(tutorial => <TutorialItems
                    key={tutorial._id}
                    tutorial={tutorial}
                ></TutorialItems>)
            }
        </div>
    );
};

export default Category;