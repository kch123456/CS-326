import * as http from "http";
import * as url from "url";
import * as db from "./db.js";



const server = http.createServer((req, res) => {
    // Define a response to a GET request to the home route
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Welcome to My Node.js Server!</h1>');
    } else {
        // Respond with a 404 Not Found if other routes or methods are accessed
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});