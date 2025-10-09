javascript

Copiar
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe usarse dentro de CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const updatedCart = cart.map(prod => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + quantity };
                }
                return prod;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (itemId) => {
        setCart(cart.filter(prod => prod.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    const getTotalItems = () => {
        return cart.reduce((total, prod) => total + prod.quantity, 0);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, prod) => total + (prod.price * prod.quantity), 0);
    };

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            clearCart,
            isInCart,
            getTotalItems,
            getTotalPrice
        }}>
            {children}
        </CartContext.Provider>
    );
};