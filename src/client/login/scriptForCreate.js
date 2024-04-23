import PouchDB from './pouchdb';

const db = new PouchDB('userCredential');

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

document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.getElementById('register');
    if (registerButton) {
        registerButton.addEventListener('click', async () => {
            await createAcc();
        });
    }
});