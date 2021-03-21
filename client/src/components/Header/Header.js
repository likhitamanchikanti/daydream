import './Header.css';

import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
        <div className='cardList'>
            {/* Logo */}
            <Link id="logo-link" to="/">
                <img className=".image-container" src={ "/logo192.png" } alt="React logo" width="50px" height="50px"/>
            </Link>

            {/* Page Links */}
            <div className="topnav-right">
                <Link className="topnav-link" to="/AboutUs">About</Link>
                <Link className="topnav-link" to='/Contributors'>Our Contributors</Link>
                <Link className="topnav-link" to='/ContactUs'>Contact Us</Link>
            </div>
        </div>
    )
}

export default Header;
