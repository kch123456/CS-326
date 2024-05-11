document.addEventListener("DOMContentLoaded", function () {
    let registerButton = document.getElementById("register");

    registerButton.addEventListener("click", async function (event) {
        event.preventDefault();
        window.location.href = "/login.html";
    });
});
document.getElementById('register').addEventListener('click',function(){
    let userName = document.getElementById('UserName').value;
    let password = document.getElementById('Password').value;
    sendDataToServer(userName,password);
})

function sendDataToServer(username, password) {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', '/submit', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };

    xhr.onerror = function() {
        console.error('Error occurred while sending data to the server.');
    };

    const jsonData = JSON.stringify({ username: username, password: password });

    xhr.send(jsonData);
}