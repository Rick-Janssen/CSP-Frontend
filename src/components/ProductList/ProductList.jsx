import React, { useEffect, useState } from 'react';
import'./ProductList.css'; // Import your CSS styles
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

    function logout() {
        fetch('http://localhost/csp-backend/logout', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.message);

                if (data.message === "Logged out successfully") {

                    localStorage.removeItem('token');
                }
            });
    }

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
<<<<<<< HEAD
                       <ProductCard id={product.id} image={product.image_url} name={product.name} type={product.origin} country={product.type} stars={product.rating} />
                    // <div
                    //     key={product.id}
                    //     className="product"
                    //     onClick={() => window.location.href = `product/${product.id}`}
                    // >
                    //     <img src={product.image_url} alt={product.name} />
                    //     <div className="details">
                    //         <h2>{product.name}</h2>
                    //         <p><strong>Origin:</strong> {product.origin}</p>
                    //         <p><strong>Type:</strong> {product.type}</p>
                    //     </div>
                    //     <div className="rating">
                    //         {/* Render stars based on rating */}
                    //         {Array.from({ length: 5 }, (_, index) => (
                    //             <span key={index} className="star">
                    //                 {index < product.rating ? '★' : '☆'}
                    //             </span>
                    //         ))}
                    //     </div>
                    // </div>
=======
                    <div
                        key={product.id}
                        className="product"
                        onClick={() => window.location.href = `product/${product.id}`}
                    >
                        <img src={product.image_url} alt={product.name} />
                        <div className="details">
                            <h2>{product.name}</h2>
                            <p><strong>Origin:</strong> {product.origin}</p>
                            <p><strong>Type:</strong> {product.type}</p>
                        </div>
                        <div className="rating">

                            {product && product.reviews.length > 0 ? (
                                (() => {
                                    const totalRating = product.reviews.reduce((acc, review) => acc + review.rating, 0);
                                    const averageRating = totalRating / product.reviews.length;
                                    return (
                                        <div>
                                            {Array.from({ length: 5 }, (_, index) => (
                                                <span key={index} className="star" >
                                                    {index < Math.round(averageRating) ? '★' : '☆'}
                                                </span>
                                            ))}
                                            <span style={{ marginLeft: '10px' }} >{averageRating.toFixed(1)} / 5</span>
                                        </div>
                                    );
                                })()
                            ) : (
                                <p>No ratings available.</p>
                            )}
                        </div>

                    </div>
>>>>>>> dcf1940ab589e9b6a90c9539648082cb41576c28
                ))}
            </div>
            <button onClick={logout}>Logout</button>

        </div>
    );
};

export default ProductList;
