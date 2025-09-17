import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/itemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    const getProductById = (id) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const allProducts = [
                    {
                        id: '1',
                        name: 'Pintura Interior Premium',
                        price: 25000,
                        category: 'residencial',
                        image: 'https://via.placeholder.com/400x300/FFD700/000000?text=Pintura+Interior',
                        description: 'Pintura de alta calidad para interiores residenciales. Fácil aplicación, secado rápido y acabado perfecto.',
                        stock: 15
                    },
                    {
                        id: '2',
                        name: 'Pintura Exterior Resistente',
                        price: 30000,
                        category: 'residencial',
                        image: 'https://via.placeholder.com/400x300/FFD700/000000?text=Pintura+Exterior',
                        description: 'Pintura resistente a la intemperie para exteriores. Protección UV y resistencia a la humedad.',
                        stock: 10
                    },
                    {
                        id: '3',
                        name: 'Pintura Comercial Pro',
                        price: 35000,
                        category: 'comercial',
                        image: 'https://via.placeholder.com/400x300/FFD700/000000?text=Pintura+Comercial',
                        description: 'Pintura profesional para espacios comerciales. Alta durabilidad y fácil mantenimiento.',
                        stock: 8
                    },
                    {
                        id: '4',
                        name: 'Pintura Industrial Heavy Duty',
                        price: 45000,
                        category: 'industrial',
                        image: 'https://via.placeholder.com/400x300/FFD700/000000?text=Pintura+Industrial',
                        description: 'Pintura resistente para uso industrial. Resistente a químicos y condiciones extremas.',
                        stock: 5
                    },
                    {
                        id: '5',
                        name: 'Textura Decorativa',
                        price: 28000,
                        category: 'especiales',
                        image: 'https://via.placeholder.com/400x300/FFD700/000000?text=Textura+Decorativa',
                        description: 'Acabado decorativo con textura especial. Crea efectos únicos en tus paredes.',
                        stock: 12
                    },
                    {
                        id: '6',
                        name: 'Kit de Herramientas Pro',
                        price: 15000,
                        category: 'adicionales',
                        image: 'https://via.placeholder.com/400x300/FFD700/000000?text=Kit+Herramientas',
                        description: 'Kit completo de herramientas profesionales. Incluye brochas, rodillos y accesorios.',
                        stock: 20
                    }
                ];

                const product = allProducts.find(p => p.id === id);
                resolve(product);
            }, 1000);
        });
    };

    useEffect(() => {
        setLoading(true);
        getProductById(itemId)
            .then(product => {
                setProduct(product);
                setLoading(false);
            });
    }, [itemId]);

    if (loading) {
        return (
            <div className="item-detail-container">
                <div className="loading">
                    <i className="fas fa-spinner fa-spin"></i>
                    <p>Cargando producto...</p>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="item-detail-container">
                <div className="not-found">
                    <h2>Producto no encontrado</h2>
                    <p>El producto que buscas no existe.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="item-detail-container">
            <ItemDetail product={product} />
        </div>
    );
};

export default ItemDetailContainer;