import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <i className="fas fa-paint-roller"></i>
                    <Link to="/" className="logo-link">
                        <h2>M.A.G. Soluciones Integrales</h2>
                    </Link>
                </div>
                
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">Sobre Nosotros</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle">
                            Servicios <i className="fas fa-chevron-down"></i>
                        </span>
                        <ul className="dropdown-menu">
                            <li><Link to="/category/residencial" className="dropdown-link">🏠 Pintura Residencial</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contacto</Link>
                    </li>
                </ul>
                
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;