import { useState, useEffect } from 'react';

const useCheckLogin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

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

    return isAuthenticated;
}

export default useCheckLogin;
