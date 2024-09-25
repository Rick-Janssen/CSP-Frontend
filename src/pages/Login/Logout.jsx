function logout() {
    fetch('/csp-backend/logout', {
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