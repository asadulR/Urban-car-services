import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Order = () => {
    //  load orders by the user
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const userEmail = user?.email;
    useEffect(() => {
        const url = `http://localhost:5000/order?email=${userEmail}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            data? 
            setOrders(data) 
            :
            <Loading/>
    })
            
    }, [user]);

    return (
        <div>
            <h2>Your Orders {orders.length}</h2>
        </div>
    );
};

export default Order;