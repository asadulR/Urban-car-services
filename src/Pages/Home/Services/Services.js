import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import '../Services/Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <section className='services-container pt-5'>
            <div className='container my-5'>
                <h3 className='text-center text-white fw-bolder fs-1'>Our total services: {services.length}</h3>

                <div className='mt-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;