const path = require("path");

console.log("FILENAME📂", __filename);
console.log("DIRNAME📂", __dirname);


// School management system...

//* folders/student/data.txt


//* 1.Join()
const filepath = path.join("folder", "students", "data.txt");
console.log(filepath);

// const parsDataPath = path.parsDataPath(filepath);
const resolvedPath = path.resolve(filepath);
const extname = path.extname(filepath);
const basename = path.basename(filepath);
const dirname = path.dirname(filepath);

console.log({
    // parsDataPath,
    resolvedPath,
    extname,
    basename,
    dirname
});
