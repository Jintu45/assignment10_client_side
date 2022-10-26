import React from 'react';
import { useRouteError } from 'react-router-dom';
import './Error.css'
const Error = () => {
    const errors = useRouteError()
    return (
        <div className='error'>
            <h1>404</h1>
            <h2>unexpected error</h2>
            <p>Sorry, an unexpected error has occurred.</p>
        </div>
    );
};

export default Error;