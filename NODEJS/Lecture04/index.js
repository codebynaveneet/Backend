const http = require("http");
const fs = require("fs");
const { Transform, pipeline } = require("stream");

const PORT = 8080;

const server = http.createServer((req, res) => {


    //? --------- 1 ---------->
    // !1. Downloding file in a bad way ❌
    // const file = fs.readFileSync("simple.txt");
    // res.end(file);

    //* 2.Downloading file in a good way (stream) ✅
    // const readableStream = fs.createReadStream("simple.txt");
    // readableStream.pipe(res);
    // res.end();



    //? --------- 2 --------->
    // !1. Copy file in a bad way ❌
    // const file = fs.readFileSync("simple.txt");
    // fs.writeFileSync("output.txt", file);
    // res.end();

    //* 2.Downloading file in a good way (stream) ✅
    // const readStream = fs.createReadStream("simple.txt");
    // const writeStream = fs.createWriteStream("simple.txt");

    // readStream.on("data", (chunk)=>{
    //     console.log("CHUNK", chunk);
    //     writeStream.write(chunk)
    // })


    //? ----------- 3 ---------> String Processing 
    // uppercase()
    // ipsum ---> Navneet

    const readStream = fs.createReadStream("simple.txt");
    const writeStream = fs.createWriteStream("output.txt");

    const transformStream = new Transform({
        transform(chunk, encoding, callback){
        const modifiedWord = chunk.toString().toUpperCase().replaceAll(/ipsum/gi , "Navneet");
        callback(null, modifiedWord)
        }
    })


    // !1. Bad Approch ❌
    // readStream.on("data", (chunk)=>{
    //     const modifiedWord = chunk.toString().toUpperCase().replaceAll(/ipsum/gi , "Navneet");
    //     writeStream.write(modifiedWord);
    // })

    readStream.pipe(transformStream).pipe(writeStream);
    // pipeline(readStream, transformStream, pipeline, (err) => {console.log(err)});
    res.end()


})

server.listen(PORT, ()=>{
    console.log(`server is connected at ${PORT} 🚀`);
})

//* Stream ------> writeable and readableStream   __|| req:--> readableStream
//* readable <------pipe----> writeable         __|| res:--> writeableStream

//* transformStream  ----> readable and writeable