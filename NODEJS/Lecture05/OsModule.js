const os = require("os");


//* 1.Get os plateform and user info
// console.log("OS module", os.platform());
// console.log("OS module", os.userInfo());

//* 2.Get the os CPU architecture
// console.log("CPU Architecture:", os.arch());

//* 3.Get the os CPU core info
// console.log("CUP CORE INFO", os.cpus().length);

//* 4.Get the free memory of the system
console.log("Free Memory:", os.freemem(), "bytes");

//* 5.Get the total memory of the system
console.log("Total Memory:" , os.totalmem(), "bytes");

//* 6.Get the home directory of the user
console.log("Home Directory:", os.homedir());

//* 7.Get the host name of the system
console.log("Host Name: ", os.hostname());

//* 8.Get the network interface of the system
console.log("Network Interface:", os.release());

//* 9.Get the os release info 
console.log("OS Release:", os.release());

//* 10.Get the OS Temp Directory
console.log("OS Temp Directory:",os.tmpdir());

//* 11.Get the os uptime 
console.log("OS uptime: ", os.uptime() ,"Second");

//* 12.Get the os version
console.log("OS version: ", os.version());

//* 13.Get the os load average
console.log("OS load average: ", os.loadavg());

//* 14.Get the os endianness
console.log("OS endianness: ", os.endianness());

// //* 15.Get the os constants
// console.log("OS constants: ", os.constants());

//* 16.OS type
console.log("OS type: ", os.type());
