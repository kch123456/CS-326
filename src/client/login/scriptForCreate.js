import * as db from "./db";

function CreateAcc(){
let userName = document.getElementById('UserName').value;
let password = document.getElementById('password').value;

const user = {'userName':userName, 'password':password};

db.put(user).then(response =>{
    console.log('Document added successfully:', response);
})
.catch(error => {
    console.error('Error adding document:', error);
});
}

document.getElementById('register').addEventListener('click',async function(){
    await CreateAcc();
    return;
});