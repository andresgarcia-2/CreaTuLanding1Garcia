import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
    <nav className="navbar">
        <div className="nav-container">
        <div className="nav-logo">
            <i className="fas fa-paint-roller"></i>
            <h2>M.A.G. Soluciones Integrales</h2>
        </div>
        
        <ul className="nav-menu">
            <li className="nav-item">
            <a href="#" className="nav-link">Inicio</a>
            </li>
            <li className="nav-item">
            <a href="#" className="nav-link">Sobre Nosotros</a>
            </li>
            <li className="nav-item">
            <a href="#" className="nav-link">Nuestros Trabajos</a>
            </li>
            <li className="nav-item">
            <a href="#" className="nav-link">Presupuestos</a>
            </li>
            <li className="nav-item">
            <a href="#" className="nav-link">Contacto</a>
            </li>
        </ul>
        
        <CartWidget />
        </div>
    </nav>
    );
};

export default NavBar;