import * as http from "http";
import * as fs from "fs";
import * as path from "path";
import * as url from "url";
import { error } from "console";


const server = http.createServer(function(req, res){
    res.write('hello');
    res.end();
});

server.listen(3001, function(error){
    if(error){
        console.log("error");
    }else{
    console.log("Server is running on port 3001");
    }
});
