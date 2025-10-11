import React, {useState} from "react";
import { useCart } from "../../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/config"
import{ Link } from "react-router-dom"

const Checkout = () => {
    const { cart, getTotalPrice, clearCart } = useCart();
    const [buyer, setBuyer] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const order = {
                buyer,
                items: cart.map(item => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity
                })),
                total: getTotalPrice(),
                date: serverTimestamp()
            };

            const docRef = await addDoc(collection(db, 'orders'), order);
            setOrderId(docRef.id);
            clearCart();
        } catch (err) {
            console.error('Error al crear la orden:', err);
            setError('Hubo un error al procesar tu compra. Intenta nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    if (orderId) {
        return (
            <div className="checkout-success">
                <i className="fas fa-check-circle"></i>
                <h2>¡Compra realizada con éxito!</h2>
                <p>Tu número de orden es:</p>
                <div className="order-id">{orderId}</div>
                <p>Recibirás un email de confirmación a: <strong>{buyer.email}</strong></p>
                <Link to="/" className="btn-primary">Volver al Inicio</Link>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h1>Finalizar Compra</h1>
            
            <div className="checkout-content">
                <div className="checkout-summary">
                    <h2>Resumen de tu pedido</h2>
                    {cart.map(item => (
                        <div key={item.id} className="checkout-item">
                            <span>{item.name} x {item.quantity}</span>
                            <span>${(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                    ))}
                    <div className="checkout-total">
                        <strong>Total:</strong>
                        <strong>${getTotalPrice().toLocaleString()}</strong>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="checkout-form">
                    <h2>Datos de contacto</h2>
                    
                    <div className="form-group">
                        <label htmlFor="name">Nombre completo</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={buyer.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Juan Pérez"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Teléfono</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={buyer.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="1234567890"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={buyer.email}
                            onChange={handleInputChange}
                            required
                            placeholder="juan@ejemplo.com"
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button 
                        type="submit" 
                        className="btn-primary"
                        disabled={loading}
                    >
                        {loading ? 'Procesando...' : 'Confirmar Compra'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;