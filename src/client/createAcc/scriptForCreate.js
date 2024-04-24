import db from "/src/client/server/db.js";

async function createAcc() {
    let userName = document.getElementById('UserName').value;
    let password = document.getElementById('password').value;

    const user = { 'userName': userName, 'password': password };

    try {
        const response = await db.put(user);
        console.log('Document added successfully:', response);
    } catch (error) {
        console.error('Error adding document:', error);
    }
}

document.getElementById('register').addEventListener('click',async function(){
    await createAcc();
    return;
});