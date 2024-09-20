function login() {
    fetch('/CSP-Backend/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: 'stefan@email.com',
            password: '123'

            // this needs to be the input vars
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                // Store the token in localStorage
                localStorage.setItem('token', data.token);
            } else {
                console.log('Login failed:', data.message);
            }
        });
}

function logout() {
    fetch('/CSP-Backend/logout', {
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
