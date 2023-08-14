//* This is a module, just a JS file
var counter = function(arr){
    return "The array is " + arr.length + " items long";
}

module.exports = counter;
//* always export what you need, otherwise you won't access it