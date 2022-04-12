import React from 'react';
import '../Expert/Expert.css'
const Expert = ({expert}) => {
    const {name, img} = expert;
    return (
        <div className="col">
        <div className="card shadow p-2 expert-card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center fw-bold">{name}</h5>
            </div>
            <div className='text-center'>
                <button className='border-0 rounded text-white card-btn fs-6 py-2 px-3 my-1'>Hire <span>{name}</span></button>
            </div>
        </div>
    </div>
    );
};

export default Expert;