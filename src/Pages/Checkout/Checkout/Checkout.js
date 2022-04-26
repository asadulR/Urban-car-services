import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);


    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            userEmail: user.email,
            userName: user.displayName,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        };
        const url = `https://radiant-sierra-97626.herokuapp.com/order/`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(result => {
            toast.success(result);
            console.log(result);
            alert('Order placed!')

            event.target.reset();
        })
    };
    return (
        <div>
            <h2 className='text-center my-5 fw-bold'>Please Order: <span className='text-primary'>{service.name}</span></h2>

            <div className='w-75 mx-auto'>
                <form onSubmit={handlePlaceOrder} style={{ maxWidth: "500px", margin: "auto" }}>
                    <div className="mb-3">
                        <input required placeholder='Your name*' name='name' value={user?.displayName} readOnly type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input required placeholder='@ Email Address*' name='email' value={user?.email} readOnly type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input required placeholder='Your address*' name='address' autoComplete='off'  type="text" className="form-control" id="exampleInputAddress" />
                    </div>
                    <div className="mb-3">
                        <input required placeholder='Service*' name='service' value={service.name} readOnly type="text" className="form-control" id="exampleInputService" />
                    </div>
                    <div className="mb-3">
                        <input required placeholder='Phone*' name='phone' type="number" className="form-control" id="exampleInputPhone" />
                    </div>
                    <div className='text-center'>
                        <button type="submit" className="btn btn-primary w-90">Order service</button>
                    </div>

                </form>
            </div>
                {/* <Toaster></Toaster> */}
            
        </div>


    );
};

export default Checkout;