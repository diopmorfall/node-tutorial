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
    if(time > 5){
        clearInterval(timer)
    }
}, 2000)

//* node can also tell us in which directory we are, and the path to the file we're working on
console.log("directory", __dirname);
console.log("filename", __filename);

//? normal function statement
function loca(){
    console.log("Loca")
}

loca();

//* function expression, very used in node
var hola = function(){
    console.log("hola");
}

function callFunction(f){ //* I can pass functions as parameters of other functions
    f();
}
//* this also is a very common pattern here
callFunction(hola);

//* I can specifically import any module I need to use
//* I have to save it into a variable so that I'm able to access to what is exported
var maths = require("./mathematician");
console.log(maths.counter(["Isagi", "Rin", "Shidou", "Aiku"]));
console.log(maths.adder(3, 4));
console.log(maths.adder(2, maths.pi))