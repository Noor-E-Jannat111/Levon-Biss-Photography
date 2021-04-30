import React from 'react';
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import Professional from '../Professional/Professional';
import Blog from '../Blog/Blog'
import './Header.css'
import Service from '../Service/Service';
import Testomonial from '../Testomonial/Testomonial'
const Header = () => {
    return (
        <div>
            <section className='banner'>
                < Navbar></Navbar>
                <Banner></Banner>

            </section>
            <Service />
            <Professional />
            <Testomonial />
            <Blog />
        </div>
    );
};

export default Header;