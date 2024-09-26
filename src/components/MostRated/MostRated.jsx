import React, { useEffect, useState } from 'react';
import '../ProductList/ProductList.css';

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
        .slice(0, 10);

    return (
        <div>
            <div id="product-list">
                {topRatedProducts.map((product) => (
                    <div key={product.id} className="product">
                        <img src={product.image_url} alt={product.name} />
                        <div className="details">
                            <h2>{product.name}</h2>
                            <p><strong>Origin:</strong> {product.origin}</p>
                            <p><strong>Type:</strong> {product.type}</p>
                        </div>
                        <div className="rating">
                            {/* Render stars based on rating */}
                            {Array.from({ length: 5 }, (_, index) => (
                                <span key={index} className="star">
                                    {index < product.rating ? '★' : '☆'}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MostRated;
