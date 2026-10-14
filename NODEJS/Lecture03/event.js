const EventEmitter = require("events");

const emitter = new EventEmitter();


// keymethods
//* on(eventName, Listener) ---- create. 
emitter.on("GREET", (args)=>{
    console.log(`Hello world${args.userName} and the id is ${args.id}`);
})

//* emit(eventName, [args]) ---- execute.
emitter.emit("GREET", {
   userName: " Navneet",
   id: "aiufds7f78ds6",

} );



// greet()
// Hello world