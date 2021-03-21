import './Header.css';

import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
        <div className='cardList'>
            <Link className="home-link" style={{ fontSize: 50}} to="/">DAYDREAM MAGAZINE</Link>

            {/* Page Links */}
            <div className="topnav-right">
                <Link className="tab-link" style={{ fontSize: 15}} to="/AboutUs">ABOUT</Link>
                <Link className="tab-link" style={{ fontSize: 15}} to='/Contributors'>OUR CONTRIBUTORS</Link>
                <Link className="tab-link" style={{ fontSize: 15}} to='/ContactUs'>CONTACT US</Link>
            </div>
        </div>
    )
}

export default Header;
