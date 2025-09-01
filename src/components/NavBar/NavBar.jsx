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
            <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle">
                Servicios <i className="fas fa-chevron-down"></i>
            </a>
            <ul className="dropdown-menu">
                <li><a href="#" className="dropdown-link">🏠 Pintura Residencial</a></li>
                <li><a href="#" className="dropdown-link">🏢 Pintura Comercial</a></li>
                <li><a href="#" className="dropdown-link">🏭 Pintura Industrial</a></li>
                <li><a href="#" className="dropdown-link">🎨 Acabados Especiales</a></li>
                <li><a href="#" className="dropdown-link">🛠️ Servicios Adicionales</a></li>
            </ul>
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