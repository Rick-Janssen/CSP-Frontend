import React, { useEffect, useState } from 'react';
import './ProductList.css';
import ProductCard from "../ProductCard/ProductCard";
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [typeFilter, setTypeFilter] = useState('all');

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost/csp-backend/products');
            const data = await response.json();
            setProducts(data);
            setFilteredProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const filterProducts = () => {
        let tempProducts = products;

        if (typeFilter !== 'all') {
            tempProducts = tempProducts.filter(product =>
                product.type && product.type.toLowerCase() === typeFilter.toLowerCase()
            );
        }

        if (searchQuery) {
            tempProducts = tempProducts.filter(product =>
                (product.name && product.name.toLowerCase().includes(searchQuery)) ||
                (product.description && product.description.toLowerCase().includes(searchQuery))
            );
        }

        setFilteredProducts(tempProducts);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        filterProducts();
    }, [searchQuery, typeFilter, products]);



    return (
        <div>
            <div className="filter-container">
                <div className="filter-section">
                    <input
                        type="text"
                        id="search-bar"
                        placeholder="Search for products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="filter-buttons">
                        <button onClick={() => setTypeFilter('all')}>All</button>
                        <button onClick={() => setTypeFilter('Food')}>Food</button>
                        <button onClick={() => setTypeFilter('Alcohol')}>Alcohol</button>
                        <button onClick={() => setTypeFilter('Other')}>Other</button>
                    </div>
                </div>
            </div>
            <div>

                <div id="product-list">
                    {filteredProducts.map(product => (
                        <ProductCard product={product} />

                    ))}



                </div>

            </div>
        </div>

    );
};

export default ProductList;
