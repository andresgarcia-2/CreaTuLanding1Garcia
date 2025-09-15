import React, { useState } from 'react';
import ItemCount from '../itemCount/itemCount';

const ItemDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(0);

    const handleOnAdd = (quantity) => {
        setQuantity(quantity);
        console.log(`Agregaste ${quantity} unidades de ${product.name}`);
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
                    {quantity === 0 ? (
                        <ItemCount 
                            stock={product.stock} 
                            initial={1} 
                            onAdd={handleOnAdd}
                        />
                    ) : (
                        <div className="added-to-cart">
                            <p>¡Agregaste {quantity} unidades al carrito!</p>
                            <button className="btn-primary">Ir al Carrito</button>
                            <button className="btn-secondary" onClick={() => setQuantity(0)}>
                                Seguir Comprando
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;