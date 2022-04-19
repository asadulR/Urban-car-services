import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home- Urban Car Serviece</title>
            </Helmet>
            <Banner />
            <Services />
            <Experts />

        </>
    );
};






export default Home;