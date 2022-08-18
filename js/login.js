document.getElementById('submit-button').addEventListener('click', function () {
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;

    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html';
    } else {
        alert('Please provide valid user name or password')
    }
})