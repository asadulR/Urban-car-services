import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';
import '../Experts/Experts.css'
const experts = [
    { id: 1, name: 'Robert Josh', img: expert1 },
    { id: 2, name: 'Will Smith', img: expert2 },
    { id: 3, name: 'Salman Khan', img: expert3 },
    { id: 4, name: 'Dwayen Rock', img: expert4 },
    { id: 5, name: 'Kagiso Rabada', img: expert5 },
    { id: 6, name: 'Virat Anushka', img: expert6 }
]
const Experts = () => {
    return (
        <section id='experts' className=' experts-section position-relative'>
            <div className="container">
                <div className='title-div shadow position-absolute bg-success'>
                    <h2 className='text-center fs-1 fw-bolder pt-2 text-white'>Our Experts</h2>
                </div>
                <div className='py-5 my-5 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                    {
                        experts.map(expert => <Expert
                            key={expert.id}
                            expert={expert}
                        ></Expert>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Experts;