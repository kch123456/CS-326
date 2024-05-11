async function checkExist(userName,password) {
    try {
        let response = await fetch('/checkExist');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        let obj = await response.json();
        let loginArr = obj.data.login;
        for(let i =0; i < loginArr.length; ++i){
            if(loginArr[i].userName === userName && loginArr[i].password ===password){
                return true;
            }
        }
        return false;
    } catch (error) {
        console.error('Error:', error);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        let userName = document.getElementById('UserName').value;
        let password = document.getElementById('Password').value;
        localStorage.setItem('userName',userName);
        if (await checkExist(userName,password)) {
            window.location.href = '/homepage.html';
        } else {
            alert('incorrect password');
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const createAccountBtn = document.getElementById('createAccountBtn');

    createAccountBtn.addEventListener('click', function (event) {
        window.location.href = '/createAcc.html';
    });
});
