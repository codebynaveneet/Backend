const fs = require("fs");

const os = require("os");
console.log(os.cpus().length);


// sync Blocking code,  async non-blocking code

// *write
// fs.writeFileSync("./text.txt", "Hey world this is the sync write")
// fs.writeFile("./test.txt", "hello world i am async code", (err)=>{
//     console.log(err); 
// })



// *read
// const res = fs.readFileSync("./text.txt", "utf8");
// console.log(res);

// fs.readFile("./test.txt", "utf8", (error , response)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(response);
//     }
// })



// *update

// fs.appendFileSync("./text.txt", new Date().toDateString());

fs.appendFile("./log.txt", `Hello world this is Navneet and logged in at ${new Date().toDateString()}\n`,
(err, res) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log(res);
    }
}) 


// *delete