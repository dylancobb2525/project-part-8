import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components-styles/Header.css';

function Header() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    
    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header id="main-header">
            <h1>Destinations with Dylan</h1>
            <nav id="main-nav">
                <div id="toggle-nav" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul id="nav-items" className={menuOpen ? '' : 'hide-small'}>
                    <li><Link to="/" className={isActive('/')} onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/about" className={isActive('/about')} onClick={toggleMenu}>About Me</Link></li>
                    <li><Link to="/travels" className={isActive('/travels')} onClick={toggleMenu}>My Travels</Link></li>
                    <li><Link to="/bucketlist" className={isActive('/bucketlist')} onClick={toggleMenu}>Bucket List</Link></li>
                    <li><Link to="/gallery" className={isActive('/gallery')} onClick={toggleMenu}>Gallery</Link></li>
                    <li><Link to="/contact" className={isActive('/contact')} onClick={toggleMenu}>Contact Me</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

