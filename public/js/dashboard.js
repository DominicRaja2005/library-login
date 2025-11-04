const token = localStorage.getItem('token');
const user = JSON.parse(localStorage.getItem('user'));

if (!token || !user) {
    window.location.href = 'login.html';
}

document.getElementById('user-info').innerHTML = `
    Welcome, ${user.full_name}!
    Username: ${user.username}
    Email: ${user.email}
    Account created: ${new Date().toLocaleDateString()}
`;

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = 'login.html';
}