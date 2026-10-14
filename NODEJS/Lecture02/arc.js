// const fs = require("fs");
// setImmediate(()=>{ console.log("Hello from immediate -1 ")}, 0);
// setTimeout(() => { console.log("Hello from timeout -1")}, 0);
// console.log("Hello world -1");


process.env.UV_THREADPOOL_SIZE = 5;

let start = Date.now();

const crypto = require("crypto");

crypto.pbkdf2("password-1", "Salt1", 100000 , 1024, "Sha512", () => {
 console.log(`${Date.now() - start}ms Done`);
})
crypto.pbkdf2("password-1", "Salt1", 100000 , 1024, "Sha512", () => {
 console.log(`${Date.now() - start}ms Done`);
})
crypto.pbkdf2("password-1", "Salt1", 100000 , 1024, "Sha512", () => {
 console.log(`${Date.now() - start}ms Done`);
})
crypto.pbkdf2("password-1", "Salt1", 100000 , 1024, "Sha512", () => {
 console.log(`${Date.now() - start}ms Done`);
})
crypto.pbkdf2("password-1", "Salt1", 100000 , 1024, "Sha512", () => {
 console.log(`${Date.now() - start}ms Done`);
})
