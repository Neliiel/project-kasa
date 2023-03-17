import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Accueil</Link>
            <Link to="/about" className="nav-link">A propos</Link>
        </nav>
    )
}

export default Navbar