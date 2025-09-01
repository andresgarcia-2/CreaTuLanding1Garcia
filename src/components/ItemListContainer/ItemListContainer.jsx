import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="item-list-container">
        <div className="hero-section">
        <div className="hero-content">
            <i className="fas fa-home hero-icon"></i>
            <h1>{greeting}</h1>
            <p>Transformamos tus espacios con acabados profesionales. Especialistas en pintura residencial, comercial e industrial.</p>
            <div className="cta-buttons">
            <button className="btn-primary">Solicitar Presupuesto</button>
            <button className="btn-secondary">Ver Trabajos</button>
        </div>
        </div>
        </div>
        </div>
    );
};

export default ItemListContainer;
