// import { promises } from "dns";
// import Database from "../../server/database";

// const database = Database();

// const db = await database.getDB();

// async function checkExist(userName,password){
//     return promises((resolve,reject) =>{
//         db.get('user-Credential')
//         .then(doc =>{
//             if (!doc.login || !Array.isArray(doc.login)) {
//                 reject(new Error('Invalid document format'));
//         }else {
//             const user = doc.login.find(entry => entry.userName === userName && entry.password === password);
//             resolve(user);
//         }
//     })
//     .catch(err => {
//         reject(err); 
//     });
// });
// }
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');


    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let userName = document.getElementById('UserName').value;
        let password = document.getElementById('Password').value;
        if (userName && password) {
            window.location.href = '/homepage.html';
        } else {
            alert('Please enter both username and password');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const createAccountBtn = document.getElementById('createAccountBtn');

    createAccountBtn.addEventListener('click', function (event) {
        window.location.href = '/createAcc.html';
    });
});