import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Track authentication
    const [isAdmin, setIsAdmin] = useState(false); // Track if the user is an admin

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetch('http://localhost/csp-backend/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (!data.message) {
                        setIsAuthenticated(true);

                        if (data.role === 'admin') {
                            setIsAdmin(true);
                        }
                    } else {
                        localStorage.removeItem('token');
                        setIsAuthenticated(false);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    setIsAuthenticated(false);
                });
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {isAdmin ? <Outlet /> : <Navigate to="/home" />}
            {/* You can now use isAdmin for specific admin routes */}
        </>
    );
};

export default ProtectedRoutes;
