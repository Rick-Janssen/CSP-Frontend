import { useState, useEffect } from 'react';

const useCheckAdmin = () => {
    const [isAdmin, setIsAdmin] = useState(false);

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
                    if (!data.message && data.role === 'admin') {
                        setIsAdmin(true);
                    } else {
                        setIsAdmin(false);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    setIsAdmin(false);
                });
        } else {
            setIsAdmin(false);
        }
    }, []);

    return isAdmin;
}

export default useCheckAdmin;
