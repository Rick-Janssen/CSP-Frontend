import React, { useEffect, useState } from 'react';

const MostRated = () => {
    const [products, setProducts] = useState([]); // No need to specify a type, just use an empty array

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

    return (
        <div>
            <div id="most-rated-list">
                {products.map((product) => (
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
