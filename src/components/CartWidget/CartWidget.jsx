import React from "react";
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CartWidget = () => {
    const { getTotalItems } = useCart();
    const totalItems = getTotalItems();

    return (
    <Link to="/cart"className="cart-widget">
        <i className="fas fa-shopping-cart"></i>
        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
    </Link>
    );
};
export default CartWidget;
