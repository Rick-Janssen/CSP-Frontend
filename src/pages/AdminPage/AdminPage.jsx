import './AdminPage.css';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const AdminPage = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: '', description: '', image_url: '', origin: '', type: ''
    });

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost/csp-backend/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Update product in the database
    const updateProduct = async (updatedProduct) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost/csp-backend/product/${updatedProduct.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updatedProduct)
            });
            if (!response.ok) throw new Error('Failed to update product');
            console.log('Product updated:', updatedProduct);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    // Handle inline editing for any field
    const handleEdit = (e, productId, field) => {
        const updatedProducts = products.map(product =>
            product.id === productId ? { ...product, [field]: e.target.value } : product
        );
        setProducts(updatedProducts);
    };

    // Save product changes when an input loses focus
    const handleSave = (productId) => {
        const productToSave = products.find(product => product.id === productId);
        updateProduct(productToSave);
    };

    // Handle adding a new product
    const handleAddProduct = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        fetch('http://localhost/csp-backend/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(newProduct),
        })
            .then(response => response.json())
            .then(data => {
                setProducts([...products, { ...newProduct, id: data.id }]); // Add new product with ID
                setNewProduct({ name: '', description: '', image_url: '', origin: '', type: '' });
            })
            .catch(error => console.error('Error adding product:', error));
    };

    // Handle deleting a product
    const handleDeleteProduct = async (productId) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost/csp-backend/product/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error('Failed to delete product');
            setProducts(products.filter(product => product.id !== productId)); // Remove product locally
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <>
            <div className="navbar">
                <h1>Admin Dashboard</h1>
            </div>
    
            <div className="admin-container">
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <td>id</td>
                                <td>name</td>
                                <td>description</td>
                                <td>image_url</td>
                                <td>origin</td>
                                <td>type</td>
                                <td>actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>
                                        <input
                                            type="text"
                                            value={product.name}
                                            onChange={(e) => handleEdit(e, product.id, 'name')}
                                            onBlur={() => handleSave(product.id)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={product.description}
                                            onChange={(e) => handleEdit(e, product.id, 'description')}
                                            onBlur={() => handleSave(product.id)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={product.image_url}
                                            onChange={(e) => handleEdit(e, product.id, 'image_url')}
                                            onBlur={() => handleSave(product.id)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={product.origin}
                                            onChange={(e) => handleEdit(e, product.id, 'origin')}
                                            onBlur={() => handleSave(product.id)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={product.type}
                                            onChange={(e) => handleEdit(e, product.id, 'type')}
                                            onBlur={() => handleSave(product.id)}
                                        />
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
    
                <h3>Add New Product</h3>
                <form onSubmit={handleAddProduct}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={newProduct.description}
                        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Image URL"
                        value={newProduct.image_url}
                        onChange={(e) => setNewProduct({ ...newProduct, image_url: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Origin"
                        value={newProduct.origin}
                        onChange={(e) => setNewProduct({ ...newProduct, origin: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Type"
                        value={newProduct.type}
                        onChange={(e) => setNewProduct({ ...newProduct, type: e.target.value })}
                    />
                    <button type="submit">Add Product</button>
                </form>
            </div>
        </>
    );    
};

export default AdminPage;
