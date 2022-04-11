import React from 'react';
import '../Service/Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div class="col">
            <div class="card shadow p-4 service-card">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title text-white">{name}</h5>
                    <p className='text-white'>Price: ${price}</p>
                    <p class="card-text">{description}</p>
                </div>
                <div className='text-center'>
                    <button className='border-0 rounded text-white card-btn fs-6 py-2 px-3 mt-3'>BOOK <span>{name}</span></button>
                </div>
            </div>
        </div>
    );
};

export default Service;