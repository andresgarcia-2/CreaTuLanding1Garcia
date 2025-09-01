import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import logo from '../../assets/logo2.PNG';

const NavBar = () => {
    return (
    <nav className="navbar">
        <div className="nav-container">
            <div className="nav-logo">
            <img src={logo} alt="Soluciones Integrales logo" className="logo-img" />
            <h2>PintoresExpertos</h2>
        </div>
        
        <ul className="nav-menu">
            <li className="nav-item">
            <a href="#" className="nav-link">Inicio</a>
            </li>
            <li className="nav-item">
            <a href="#" className="nav-link">Quienes somos</a>
            </li>
            <li className="nav-item">
            <a href="#" className="nav-link">Servicios de Pintura
            </a>
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