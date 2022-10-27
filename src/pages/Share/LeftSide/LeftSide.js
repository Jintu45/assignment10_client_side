import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSide.css'
const LeftSide = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories_item')
        .then(res => res.json())
        .then(data =>  setCategories(data))
    }, [])
    return (
        <div>
            <h3 className='text-danger'>Categories</h3>
            <div className=' bg-white py-4 px-2 items-section'>
            {
                categories.map(category => <p key={category.id}>
                    <Link className='link-item' to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
            </div>
        </div>
    );
};

export default LeftSide;