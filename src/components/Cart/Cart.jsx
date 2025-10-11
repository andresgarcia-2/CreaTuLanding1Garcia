import React from "react";
import { Link } from "react-router-dom";
import { useCart} from "../../context/CartContext";
import CartItem from "../CartItem/CartItem"

const cart = () => {
    const { cart, clearCart, getTotalPrice, getTotalItems} = useCart();

    if (getTotalItems() === 0) {
        return (
            < div className="cart-empty">
                <i className="fas fa-shopping-cart"></i>
                <h2>Tu carrito esta vacio</h2>
                <p>¡Agrega productos para comenzar tu compra!</p>
                <link to="/" className="btn-primary">Ver Productos</link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h1>Tu Carrito de Compras</h1>

            <div className="cart-content">
                <div className="cart-items">
                    {cart.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>

                <div className="cart-summary">
                    <h2>Resumen de Compra</h2>
                    <div className="summary-row">
                        <span>Total de productos:</span>
                        <span>{getTotalItems()} unidades</span>
                    </div>
                    <div className="summary-row total">
                        <span>Total a pagar:</span>
                        <span>${getTotalPrice().toLocaleString()}</span>
                    </div>

                    <div className="cart-actions">
                        <Link to="/checkout" className="btn-primary">
                            Finalizar Compra
                        </Link>
                        <button onClick={clearCart} className="btn-secondary">
                            Vaciar Carrito
                        </button>
                        <Link to="/" className="btn-link">
                            Seguir Comprando
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;