import * as http from "http";
import * as fs from "fs";
import * as path from "path";
import * as url from "url";
import { error } from "console";


const server = http.createServer(function(req, res){
    fs.readFile("src/client/login/login.html",function(error, data){
        if(error){
            res.writeHead(404);
            res.writeHead('file not found');
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            fs.readFile("src/client/login/styleForLogin.css",function(error,data){
                if(error){
                    res.writeHead(404);
                    res.writeHead('Css error');
                }else{
                    res.write('<style>');
                    res.write(data);
                    res.write('</style>');
                    fs.readFile('src/client/login/scriptForLogin.js',function(error,data){
                        if(error){
                            res.writeHead(404);
                            res.writeHead("Js error");
                        }else{
                            res.write('<script type="module">');
                            res.write(data);
                            res.write('</script>');
                        }
                    })
                }
            })
        }
        res.end();
    })
});

server.listen(3001, function(error){
    if(error){
        console.log("error");
    }else{
    console.log("Server is running on port 3001");
    }
});
