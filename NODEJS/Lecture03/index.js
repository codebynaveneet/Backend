//* Import the EventEmitter class from the events module
const EventEmitter = require("events");
const fs = require("fs");


//* Create a custom event emitter class
const userEmitter = new EventEmitter();


//*  Instantiate the event emitter 
class userEvenEmitter extends EventEmitter {}


//* Initialize an object to track event counts
const eventCounts = {
    login: 0,
    logout: 0,
    purchashe: 0,
    profileupdate: 0
}

const LogFile = "eventlog.json";
if(fs.existsSync(LogFile)){
const data = fs.readFileSync(LogFile, "utf-8");
Object.assign(eventCounts, JSON.parse(data))
}

function saveCounts(){
    fs.writeFileSync(LogFile, JSON.stringify(eventCounts, null, 2))
}



// Event creating 
userEmitter.on("LOGIN", (username)=>{
    eventCounts.login++;
    console.log(`${username} Logged in Successfully ✅`);
    saveCounts();
})

userEmitter.on("LOGIN", (username)=>{
    eventCounts.logout++;
    console.log(`${username} logout in Successfully ❌`);
    saveCounts();

})

userEmitter.on("PURCHASE", (username, items)=>{
    eventCounts.purchashe++;
    console.log(`${username} purchased ${items}`);
    saveCounts();
})

userEmitter.on("PROFILE_UPDATE", (username, field)=>{
    eventCounts.profileupdate++;
    console.log(`${username} updated their profile field: ${field}`);
    saveCounts();
})

userEmitter.on("SUMMARY", ()=>{
    console.log("\nEvent summary: ");
    console.log(`Logins: ${eventCounts.login}`);
    console.log(`Logouts: ${eventCounts.logout}`);
    console.log(`Purchase: ${eventCounts.purchashe}`);
    console.log(`Profileupdate: ${eventCounts.profileupdate}`);
})



// emit events with different arguments

userEmitter.emit("LOGIN", "Navneet");
userEmitter.emit("LOGOUT", "Navneet");
userEmitter.emit("PURCHASE", "Navneet", "iphon16");
userEmitter.emit("PROFILE_UPDATE", "Navneet", "Email update");

userEmitter.emit("SUMMARY");