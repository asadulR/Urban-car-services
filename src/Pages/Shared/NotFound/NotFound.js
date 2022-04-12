import React from 'react';

import sleeping from '../../../images/sleeping.jpg';
const NotFound = () => {
    return (
        <div className='py-5'>
            <h1 className='text-primary text-center fw-bolder'>404</h1>
            <h2 className='text-primary text-center'>Machanic is sleeping!</h2>
            <img className='w-100' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;