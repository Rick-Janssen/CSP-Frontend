import React, { useEffect, useState } from 'react';
import './ProductList.css'; // Import your CSS styles
import ProductCard from "../ProductCard/ProductCard";
const ProductList = () => {
    const [products, setProducts] = useState([]); // State for all products
    const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
    const [searchQuery, setSearchQuery] = useState(''); // State for search input
    const [typeFilter, setTypeFilter] = useState('all'); // State for product type filter

    // Function to fetch products from the backend
    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost/csp-backend/products');
            const data = await response.json();
            setProducts(data);
            setFilteredProducts(data); // Initialize filtered products
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    // Function to filter products based on search query and type
    const filterProducts = () => {
        let tempProducts = products;

        // Filter by type
        if (typeFilter !== 'all') {
            tempProducts = tempProducts.filter(product =>
                product.type && product.type.toLowerCase() === typeFilter.toLowerCase()
            );
        }

        // Filter by search query
        if (searchQuery) {
            tempProducts = tempProducts.filter(product =>
                (product.name && product.name.toLowerCase().includes(searchQuery)) ||
                (product.description && product.description.toLowerCase().includes(searchQuery))
            );
        }

        setFilteredProducts(tempProducts);
    };

    // Effect to fetch products on component mount
    useEffect(() => {
        fetchProducts();
    }, []);

    // Effect to filter products whenever searchQuery or typeFilter changes
    useEffect(() => {
        filterProducts();
    }, [searchQuery, typeFilter, products]);



    return (
        <div>
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

            <div id="product-list">
                {filteredProducts.map(product => (
                    <ProductCard product={product} />

                ))}
            </div>

        </div>

    );
};

export default ProductList;
