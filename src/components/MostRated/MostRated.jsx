import React, { useEffect, useState } from 'react';
import '../ProductList/ProductList.css';
import ProductCard from '../ProductCard/ProductCard';

const MostRated = () => {
    const [products, setProducts] = useState([]);

    // Function to fetch products from the backend
    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost/csp-backend/products');
            const data = await response.json();
            setProducts(data); // Set the fetched products to the state
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Sort the products by rating in descending order and select the top 10
    const topRatedProducts = products
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 8);

    return (
        <div>
            <div id="product-list">
                {topRatedProducts.map((product) => (
                    <ProductCard product={product}/>
                ))}
            </div>
        </div>
    );
};

export default MostRated;
