
// async function createAcc() {
//     let userName = document.getElementById('UserName').value;
//     let password = document.getElementById('Password').value;

//     const user = { 'userName': userName, 'password': password };

//     try {
//         const response = await db.put(user);
//         console.log('Document added successfully:', response);
//     } catch (error) {
//         console.error('Error adding document:', error);
//     }
// }

// document.getElementById('register').addEventListener('click',async function(){
//     await createAcc();
//     return;
// });

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
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Configure the request
    xhr.open('POST', '/submit', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Define what happens on successful data submission
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Handle successful response from the server
            console.log(xhr.responseText);
        }
    };

    // Define what happens in case of error
    xhr.onerror = function() {
        console.error('Error occurred while sending data to the server.');
    };

    // Convert the data to JSON format
    const jsonData = JSON.stringify({ username: username, password: password });

    // Send the request with the JSON data
    xhr.send(jsonData);
}
