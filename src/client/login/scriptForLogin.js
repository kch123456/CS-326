document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
 
 
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        let userName = document.getElementById('UserName').value;
        let password = document.getElementById('Password').value;
        if (userName && password) { 
            window.location.href = '/homepage/homepage.html'; 
        } else {
            alert('Please enter both username and password'); 
        }
    });
 });


 document.addEventListener('DOMContentLoaded', function() {
    const createAccountBtn = document.getElementById('createAccountBtn');
 
    createAccountBtn.addEventListener('click', function(event) {
        window.location.href = '/createAcc/createAcc.html';
    });
});



 