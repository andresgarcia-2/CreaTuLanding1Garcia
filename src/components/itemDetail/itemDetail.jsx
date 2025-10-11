import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../itemCount/itemCount';
import { useCart } from '../../context/CartContext';

const ItemDetail = ({ product }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useCart();

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        addItem(product, quantity);
    };

    return (
        <div className="item-detail">
            <div className="item-detail-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="item-detail-info">
                <h1>{product.name}</h1>
                <p className="item-detail-price">${product.price.toLocaleString()}</p>
                <p className="item-detail-description">{product.description}</p>
                <p className="item-detail-stock">Stock disponible: {product.stock}</p>
        
                <div className="item-detail-actions">
                    {quantityAdded === 0 ? (
                        <ItemCount 
                            stock={product.stock} 
                            initial={1} 
                            onAdd={handleOnAdd}
                        />
                    ) : (
                        <div className="added-to-cart">
                            <p>✅ ¡Agregaste {quantityAdded} unidades al carrito!</p>
                            <Link to="/cart" className="btn-primary">Ir al Carrito</Link>
                            <Link to="/" className="btn-secondary">Seguir Comprando</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;