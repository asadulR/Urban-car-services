import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();

    const [service, setService] = useState({});

    useEffect( () => {
        const url = `https://radiant-sierra-97626.herokuapp.com/service/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data));
    },[]);
    return (
        <div>
            <h2>You are about to book: {service.name}</h2>
            <div className='text-center my-5' style={{minHeight:'300px'}}>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;