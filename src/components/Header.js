import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
    const location = useLocation();
    
    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header id="main-header">
            <h1>Destinations with Dylan</h1>
            <nav id="main-nav">
                <div id="toggle-nav">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul id="nav-items" className="hide-small">
                    <li><Link to="/" className={isActive('/')}>Home</Link></li>
                    <li><Link to="/about" className={isActive('/about')}>About Me</Link></li>
                    <li><Link to="/travels" className={isActive('/travels')}>My Travels</Link></li>
                    <li><Link to="/bucketlist" className={isActive('/bucketlist')}>Bucket List</Link></li>
                    <li><Link to="/gallery" className={isActive('/gallery')}>Gallery</Link></li>
                    <li><Link to="/contact" className={isActive('/contact')}>Contact Me</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

