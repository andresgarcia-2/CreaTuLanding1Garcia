import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../itemList/itemList';

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
                        image: 'https://via.placeholder.com/300x200/FFD700/000000?text=Pintura+Interior',
                        description: 'Pintura de alta calidad para interiores residenciales'
                    },
                    {
                        id: '2',
                        name: 'Pintura Exterior Resistente',
                        price: 30000,
                        category: 'residencial',
                        image: 'https://via.placeholder.com/300x200/FFD700/000000?text=Pintura+Exterior',
                        description: 'Pintura resistente a la intemperie para exteriores'
                    },
                    {
                        id: '3',
                        name: 'Pintura Comercial Pro',
                        price: 35000,
                        category: 'comercial',
                        image: 'https://via.placeholder.com/300x200/FFD700/000000?text=Pintura+Comercial',
                        description: 'Pintura profesional para espacios comerciales'
                    },
                    {
                        id: '4',
                        name: 'Pintura Industrial Heavy Duty',
                        price: 45000,
                        category: 'industrial',
                        image: 'https://via.placeholder.com/300x200/FFD700/000000?text=Pintura+Industrial',
                        description: 'Pintura resistente para uso industrial'
                    },
                    {
                        id: '5',
                        name: 'Textura Decorativa',
                        price: 28000,
                        category: 'especiales',
                        image: 'https://via.placeholder.com/300x200/FFD700/000000?text=Textura+Decorativa',
                        description: 'Acabado decorativo con textura especial'
                    },
                    {
                        id: '6',
                        name: 'Kit de Herramientas Pro',
                        price: 15000,
                        category: 'adicionales',
                        image: 'https://via.placeholder.com/300x200/FFD700/000000?text=Kit+Herramientas',
                        description: 'Kit completo de herramientas profesionales'
                    }
                ]

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
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;