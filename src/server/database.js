import PouchDB from "pouchdb";


async function init(){
const db = new PouchDB('Echo-secure-DB');
try {
    const login = await db.get("user-Credential");
  } catch (e) {
    await db.put({ _id: "user-Credential", login: [] });
  }
try {
    const tasks = await db.get("tasks");
  } catch (e) {
    await db.put({ _id: "tasks", details: [] });
  }
await db.close();
}

//save user credentials


//save tasks
const Database = async ()=>{

    await init();

    const getDB = () => new PouchDB('Echo-secure-DB');
    const obj = {
    
    getLogin: async () =>{
        try {
            const newDB = getDB();
            const loginArr = await newDB.get('user-Credential');
            await newDB.close();
            return {status:'get Login Successful', data:loginArr}; 
        } catch (error) {
            console.log('error');
        }
    },

    saveCredential: async (userName,password) =>{
    try{
        const newDB = getDB();
        const data = await newDB.get('user-Credential');
        data.login.push({userName:userName,password:password})
        await newDB.put(data);
        await newDB.close();
        return {status:'successfully created account'};
    }catch(err){
        return {status:'failed to create account'};
    }
    },


    saveTask: async (taskName,taskDate,description,category) =>{
    try{
        const newDB = getDB();
        const data = await newDB.get('tasks');
        data.details.push({taskName:taskName,taskDate:taskDate,description:description,category:category});
        await newDB.push(data);
        await newDB.close();
        return {status:'successfully saved task'};
    }catch(err){
        return {status:'failed to save task'};
    }
    }

};
return obj;

};


export default Database;




