import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/itemDetail';

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
                        type: 'interior',
                        image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop',
                        description: 'Pintura de alta calidad para interiores residenciales. Acabado mate y satinado disponible.',
                        stock: 15
                    },
                    {
                        id: '2',
                        name: 'Pintura Decorativa Texturada',
                        price: 35000,
                        category: 'residencial',
                        type: 'decorativa',
                        image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop',
                        description: 'Pintura con efectos decorativos y texturas especiales para crear ambientes únicos.',
                        stock: 8
                    },
                    {
                        id: '3',
                        name: 'Microcemento Profesional',
                        price: 55000,
                        category: 'residencial',
                        type: 'microcemento',
                        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
                        description: 'Microcemento para pisos y paredes. Acabado moderno y resistente al agua.',
                        stock: 10
                    },
                    {
                        id: '4',
                        name: 'Empapelado Premium',
                        price: 18000,
                        category: 'residencial',
                        type: 'empapelado',
                        image: 'https://i.pinimg.com/originals/57/3c/83/573c83b0c113364ca422575f122569793.jpg',
                        description: 'Papel tapiz de alta calidad. Diseños clásicos y modernos disponibles.',
                        stock: 20
                    },
                    {
                        id: '5',
                        name: 'Pintura Exterior Resistente',
                        price: 32000,
                        category: 'residencial',
                        type: 'exterior',
                        image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop',
                        description: 'Pintura exterior resistente a UV, lluvia y cambios climáticos extremos.',
                        stock: 12
                    },
                    {
                        id: '6',
                        name: 'Kit Completo de Acabados',
                        price: 45000,
                        category: 'residencial',
                        type: 'kit',
                        image: 'https://www.benjaminmoore.com/es-us/_assets_benjaminmoore_com/transform/2a4e4285-fc5e-4980-a5b4-52e34ef01db5/image_PaintingToolKit_1080x1080',
                        description: 'Kit que incluye pintura interior, exterior y herramientas básicas.',
                        stock: 7
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