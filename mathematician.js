//* This is a module, just a JS file
var counter = function(arr){
    return "The array is " + arr.length + " items long";
}

var adder = function(a, b){
    return `The sum between ${a} and ${b} is ${a+b}`
}

var pi = 3.142;
//? I could also export them this way if I want
/*
    module.exports.counter = function(arr){
        return "The array is " + arr.length + " items long";
    }

     module.exports.pi = 3.142;
*/

//* always export what you need, otherwise you won't access it outside of the module
//* If you need to export multiple things, you can add properties to .exports
module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}