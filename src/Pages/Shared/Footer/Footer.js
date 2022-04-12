import React from 'react';

const Footer = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    return (
        <footer className='text-center mt-5 pb-4'>
            <p className=''>Copyright &copy; {getCurrentYear()}</p>
        </footer>
    );
};

export default Footer;