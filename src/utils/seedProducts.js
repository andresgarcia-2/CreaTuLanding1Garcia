import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const products = [
    {
        name: 'Pintura Interior Premium',
        price: 25000,
        category: 'residencial',
        image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop',
        description: 'Pintura de alta calidad para interiores residenciales. Acabado mate y satinado disponible.',
        stock: 15
    },
    {
        name: 'Pintura Decorativa Texturada',
        price: 35000,
        category: 'residencial',
        image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=300&h=200&fit=crop',
        description: 'Pintura con efectos decorativos y texturas especiales para crear ambientes únicos.',
        stock: 8
    },
    {
        name: 'Microcemento Profesional',
        price: 55000,
        category: 'residencial',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop',
        description: 'Microcemento para pisos y paredes. Acabado moderno y resistente al agua.',
        stock: 10
    },
    {
        name: 'Empapelado Premium',
        price: 18000,
        category: 'residencial',
        image: 'https://i.pinimg.com/originals/57/3c/83/573c83b0c113364ca422575f122569793.jpg',
        description: 'Papel tapiz de alta calidad. Diseños clásicos y modernos disponibles.',
        stock: 20
    },
    {
        name: 'Pintura Exterior Resistente',
        price: 32000,
        category: 'residencial',
        image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop',
        description: 'Pintura exterior resistente a UV, lluvia y cambios climáticos extremos.',
        stock: 12
    },
    {
        name: 'Kit Completo de Acabados',
        price: 45000,
        category: 'residencial',
        image: 'https://www.benjaminmoore.com/es-us/_assets_benjaminmoore_com/transform/2a4e4285-fc5e-4980-a5b4-52e34ef01db5/image_PaintingToolKit_1080x1080',
        description: 'Kit que incluye pintura interior, exterior y herramientas básicas.',
        stock: 7
    }
];

export const seedProducts = async () => {
    try {
        const productsCollection = collection(db, 'products');
        
        for (const product of products) {
            await addDoc(productsCollection, product);
            console.log(`✅ Producto "${product.name}" agregado`);
        }
        
        console.log('🎉 Todos los productos fueron agregados exitosamente');
    } catch (error) {
        console.error('❌ Error al agregar productos:', error);
    }
};