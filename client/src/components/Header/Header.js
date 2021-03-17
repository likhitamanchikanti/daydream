import './Header.css';

import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
        <div className='topnav'>
            {/* Logo */}
            <Link id="logo-link" to="/">
                <img className=".image-container" src={ "/logo192.png" } alt="React logo" />
            </Link>

            {/* Page Links */}
            <div className="topnav-right">
                <Link className="topnav-link" to="/about">About</Link>
                <Link className="topnav-link" to='/Register'>Sign in</Link>
                <Link className="topnav-link" to='/projects'>Our Magazine</Link>
                <Link className="topnav-link" to='/projects'>Our Contributors</Link>
                <a className="topnav-link" target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/groups/ufosc/events/?source=4&action_history=null&filter=calendar">
                    Contact Us
                    <i className="fas fa-external-link-alt external-link" data-fa-transform="up-6"></i>
                </a>
                {/* <a className="topnav-link" target='_blank' rel="noopener noreferrer" href="https://github.com/ufosc/club-resources">
                    Resources
                    <i className="fas fa-external-link-alt external-link" data-fa-transform="up-6 right-4"></i>
                </a> */}
            </div>
        </div>
    )
}

export default Header;
