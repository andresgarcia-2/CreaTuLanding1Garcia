import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <div className="item-card">
            <img src={product.image} alt={product.name} />
            <div className="item-info">
                <h3>{product.name}</h3>
                <p className="item-price">${product.price.toLocaleString()}</p>
                <p className="item-description">{product.description}</p>
                <Link to={`/item/${product.id}`} className="btn-detail">
                    Ver Detalle
                </Link>
            </div>
        </div>
    );
};

export default Item;