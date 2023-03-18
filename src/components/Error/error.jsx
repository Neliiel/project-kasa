import React from 'react';
import { Link } from 'react-router-dom';

function Errorpage () {
    return (
        <div className="error-page">
            <p className="error-number">404</p>
            <p className="oups"> Oups! La page que vous demandez n'existe pas</p>
            <Link to="/" className="nav-link">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Errorpage