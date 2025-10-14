import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <i className="fas fa-paint-roller"></i>
                    <NavLink to="/" className="logo-link">
                        <h2>M.A.G. Soluciones Integrales</h2>
                    </NavLink>
                </div>
                
                <ul className="nav-menu">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link">Sobre Nosotros</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle">
                            Servicios <i className="fas fa-chevron-down"></i>
                        </span>
                        <ul className="dropdown-menu">
                            <li>
                                <NavLink to="/category/residencial" className="dropdown-link">🏠 Pintura Residencial</NavLink></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link">Contacto</NavLink>
                    </li>
                </ul>
                
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;