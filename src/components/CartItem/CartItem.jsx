import React from 'react';
import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
    const { removeItem } = useCart();

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            
            <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-price">Precio: ${item.price.toLocaleString()}</p>
                <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
                <p className="cart-item-subtotal">
                    Subtotal: ${(item.price * item.quantity).toLocaleString()}
                </p>
            </div>

            <button 
                className="remove-button" 
                onClick={() => removeItem(item.id)}
                title="Eliminar producto"
            >
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default CartItem;