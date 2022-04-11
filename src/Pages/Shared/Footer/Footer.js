import React from 'react';

const Footer = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    return (
        <footer>
            <p>Copyright &copy; {getCurrentYear}</p>
        </footer>
    );
};

export default Footer;