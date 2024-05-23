
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'admin' && password === 'pass') {
        window.location.href = 'landing.html';
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    window.location.href = 'index.html';
});
