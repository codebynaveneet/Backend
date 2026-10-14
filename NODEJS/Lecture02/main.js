// const fs = require("fs");

// fs.writeFile("write.txt", "Hello world this is Navneet", (err)=>{
//     if(err){
//         console.log("Error");
        
//     }
// });



// setInterval(() => {
//     console.log("hello i am from global.");
    
// }, 3000);

// let count = 0;
// const Internal = setInterval(()=>{
//     console.log(`Intrerval count: ${++count}`);
//     if(count === 4) {
//         clearInterval(Internal);
//     }
    
// }, 1000);

// console.log(global);


console.log(Object.getOwnPropertyNames(global));
