import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Service/Service.css'

const Service = ({ service }) => {
    const { name, img, price, description, id } = service;

    const navigate = useNavigate();
    const handleNavigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className="col">
            <div className="card shadow p-3 service-card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className='text-primary'>Price: ${price}</p>
                    <p className="card-text">{description}</p>
                </div>
                <div className='text-center'>
                    <button onClick={() => handleNavigateToServiceDetail(id)} className='border-0 rounded text-white card-btn fs-6 py-2 px-3 mt-3'>BOOK <span>{name}</span></button>
                </div>
            </div>
        </div>
    );
};

export default Service;