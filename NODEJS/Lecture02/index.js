const http = require("http");
const fs = require("fs");


const PORT = 8080;

const myServer = http.createServer((request, response) => {
    const Log = `${(Date.now())}: New Request Recived\n`;

    fs.appendFile("log.txt", Log , (err)=>{
        if(err){
            console.error(" Error writing to the log file:", err);
            response.statusCode = 500;
            response.end("Internal Server Error");
            return;
        }
        response.end("Hello world From server")
    })

    // console.log(request)
    // response.end("Hello From server");
})

myServer.listen(PORT, () => {
    console.log(`Server is connected 🐇 at $(PORT)`);
})


// TODO: A CLASS ON STATUS CODES.