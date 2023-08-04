document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Replace the following condition with a real authentication check on the server-side
        if (username === 'admin' && password === 'password') {
            window.location.href = '/Home/index.html'
            // Redirect the user to the dashboard or other authenticated pages
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
