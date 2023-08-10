console.log("Node's here gang")
//* to execute the file, obviously you have to be in the same directory

//* Computers don't understand JS, so it needs a JS engine that converts JS into machine code that is understandable
//? Node.js is written in C++ that allows us to write JS that can be executed on a pc
//* It uses Google's open source high-performance v8 engine, also written in C++
//? It can run standalone, or be embedded in any C++ app


//* Running JS in the browser makes the window the global object, but in node it's an object called global
//? console.log is one of its methods, but I can access any of them
setTimeout(() => {
    console.log("global window after 3 sec")
}, 3000)

let time = 0;
let timer = setInterval(() => {
    time += 2
    console.log(`${time} seconds passed`)
    if(time > 7){
        clearInterval(timer)
    }
}, 2000)

//* node can also tell us in which directory we are, and the path to the file we're working on
console.log("directory", __dirname);
console.log("filename", __filename);

