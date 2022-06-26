const http = require("http");
const fs = require("fs");

const wwwroot = process.argv[2];

http.createServer(function(request, response){
       
    let filePath = "index.html";
    if(request.url !== "/"){
        // получаем путь после слеша
        filePath = request.url.substring(1);
        if (wwwroot != undefined && wwwroot != null && wwwroot != "")
        {
            delimiter = "/";
            if (filePath[0] = "/") delimiter = "";
            filePath = wwwroot + delimiter + filePath;
        }
    }
    console.log(filePath);
    fs.readFile(filePath, function(error, data){
        if(error){
            console.log("read file error: " + error.message);
            response.statusCode = 404;
            response.end("Resourse not found!");
        }   
        else{
            response.end(data);
        }
    });
     
}).listen(3000, function(){
    console.log("Server started at 3000");
});