import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-200 text-center py-2 text-sm text-gray-600">
            <span>&copy; {new Date().getFullYear()} Gin. All rights reserved.</span>
        </footer>
    );
};

export default Footer;