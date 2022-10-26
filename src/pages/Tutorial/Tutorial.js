import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Tutorial = () => {
    const tutorials = useLoaderData()
    
    return (
        <div>
            <h2>hello</h2>
        </div>
    );
};

export default Tutorial;