const crypto = require("crypto");

// 1. RandomBytes
// const randomValue = crypto.randomBytes(100);
// console.log(randomValue.toString("hex"));



// 2. CreateHash
const hashValue = crypto.createHash("sha256").update("Navneet").digest("hex");

const inputValue = "Naneet";
const mathValue = crypto.createHash("sha256").update(inputValue).digest("hex");

if(hashValue === mathValue){
    console.log("you can login");
}
else{
    console.log("something went wrong"); 
}
