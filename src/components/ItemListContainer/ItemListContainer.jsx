import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const allProducts = [
                    {
                        id: '1',
                        name: 'Pintura Interior Premium',
                        price: 25000,
                        category: 'residencial',
                        image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop',
                        description: 'Pintura de alta calidad para interiores residenciales. Acabado mate y satinado disponible.'
                    },
                    {
                        id: '2',
                        name: 'Pintura Decorativa Texturada',
                        price: 35000,
                        category: 'residencial',
                        image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=300&h=200&fit=crop',
                        description: 'Pintura con efectos decorativos y texturas especiales para crear ambientes únicos.'
                    },
                    {
                        id: '3',
                        name: 'Microcemento Profesional',
                        price: 55000,
                        category: 'residencial',
                        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop',
                        description: 'Microcemento para pisos y paredes. Acabado moderno y resistente al agua.'
                    },
                    {
                        id: '4',
                        name: 'Empapelado Premium',
                        price: 18000,
                        category: 'residencial',
                        image: 'https://i.pinimg.com/originals/57/3c/83/573c83b0c113364ca422575f122569793.jpg',
                        description: 'Papel tapiz de alta calidad. Diseños clásicos y modernos disponibles.'
                    },
                    {
                        id: '5',
                        name: 'Pintura Exterior Resistente',
                        price: 32000,
                        category: 'residencial',
                        image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop',
                        description: 'Pintura exterior resistente a UV, lluvia y cambios climáticos extremos.'
                    },
                    {
                        id: '6',
                        name: 'Kit Completo de Acabados',
                        price: 45000,
                        category: 'residencial',
                        image: 'https://www.benjaminmoore.com/es-us/_assets_benjaminmoore_com/transform/2a4e4285-fc5e-4980-a5b4-52e34ef01db5/image_PaintingToolKit_1080x1080',
                        description: 'Kit que incluye pintura interior, exterior y herramientas básicas.'
                    }
                ];

                const filteredProducts = categoryId 
                    ? allProducts.filter(product => product.category === categoryId)
                    : allProducts;

                resolve(filteredProducts);
            }, 1000);
        });
    };

    useEffect(() => {
        setLoading(true);
        getProducts()
            .then(products => {
                setProducts(products);
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) {
        return (
            <div className="item-list-container">
                <div className="loading">
                    <i className="fas fa-spinner fa-spin"></i>
                    <p>Cargando productos...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="item-list-container">
            <h1>{greeting}</h1>
            {categoryId && (
                <h2>Categoría: {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</h2>
            )}
            
            <div className="item-list">
                {products.map(product => (
                    <div key={product.id} className="item-card">
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
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;