import PouchDB from "pouchdb";


const db = new PouchDB('Echo-secure-DB');
async function init(){
await db.put({id:'user-Credential', login: []});
await db.put({id:'tasks', details:[]});
}

//save user credentials


//save tasks
const Database = async ()=>{

    await init();

    const getDB = () => new PouchDB('Echo-secure-DB');


    const obj = {


    saveCredential: async (userName,password) =>{
    try{
        const db = getDB();
        const data = await db.get('user-Credential');
        data.login.push({userName:userName,password:password})
        await db.put(data);
        await db.close();
        return {status:'successfully created account'};
    }catch(err){
        return {status:'failed to create account'};
    }
    },


    saveTask: async (taskName,taskDate,description,category) =>{
    try{
        const db = getDB();
        const data = await db.get('tasks');
        data.details.push({taskName:taskName,taskDate:taskDate,description:description,category:category});
        await db.push(data);
        await db.close();
        return {status:'successfully saved task'};
    }catch(err){
        return {status:'failed to save task'};
    }
    }

};
return obj;

};


export default Database;




