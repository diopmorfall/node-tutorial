var fs = require("fs");
//* this core module allows us to read and write files on our pc
var readMe = fs.readFileSync("Readme.txt", "utf-8") //* this allows to read files, and it's synchronous
//! which means it's blocking the flow until the reading is done
console.log(readMe)
fs.writeFileSync("writing.txt", readMe)

//* this is the asynchronous version, which always needs a callback when the process is done
//? also this isn't blocking the code like the synchronous one
fs.readFile("Readme.txt", "utf-8", function(err, data){
    console.log("Async reading: " + data)
    fs.writeFile("async-writing.txt", data, function(err, data){
        console.log("Async writing successful")
    })
})