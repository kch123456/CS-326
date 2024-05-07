import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import Database from './database.js';

const app = express();
const scriptUrl = new URL(import.meta.url);
const currentPath = scriptUrl.pathname;
const colonIndex = currentPath.indexOf(":");
const subPath = currentPath.substring(colonIndex + 1);
const src = 'src';
const indexOfSrc = subPath.lastIndexOf(src);
const srcPath = subPath.substring(0, indexOfSrc + src.length);

app.use(express.static(srcPath + '/public'));
app.use(bodyParser.json());


app.post('/submit', async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const database = await Database();
    console.log('Username:', username);
    console.log('Password:', password);
    await database.saveCredential(username, password);
    console.log('saved successful');
    res.send("Credentials saved successfully!");
  } catch(error) {
    console.error("Error saving credentials: ", error);
    res.status(500).send("Internal Server Error");
  }
  // const username = req.body.username;
  // const password = req.body.password;
  // const database = await Database();
  // console.log('Username:', username);
  // console.log('Password:', password);
  // await database.saveCredential(username,password);
  // console.log('saved successful');
});




app.get('/', (req, res) => {
    res.sendFile(srcPath+'/client/login.html');
  });

app.get('/login.html',(req,res) =>{
  res.sendFile(srcPath + '/client/login.html');
})
app.get('/createAcc.html',(req,res) =>{
   res.sendFile(srcPath + '/client/createAcc.html');
})
app.get('/dashboard.html',(req,res) =>{
  res.sendFile(srcPath + '/client/dashboard.html');
});

app.get('/homepage.html',(req,res) =>{
  res.sendFile(srcPath + '/client/homepage.html');
})
app.get('/logout.html',(req,res) =>{
  res.sendFile(srcPath + '/client/logout.html');
})
app.get('/taskDetails.html',(req,res) =>{
  res.sendFile(srcPath + '/client/taskDetails.html');
})

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err); 
  }
  console.error("Server Error: ", err); 
  res.status(500).send('Internal Server Error');
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
  