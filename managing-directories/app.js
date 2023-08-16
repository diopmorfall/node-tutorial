var fs = require("fs");
//fs.unlink("delete.txt", function(err, data){});
//* this allows to delete files


//fs.mkdirSync("players"); //* creating directories synchronously
//fs.rmdirSync("players"); //* deleting directories synchronously

/*
fs.mkdir("mcs", function(){
    //? asynchronously creating a directory, and then performing some actions
    fs.readFile("Readme.txt", function(err, data){
        fs.writeFile("./mcs/luffy.txt", data, function(err, data){})
        //? creating a new file into the new directory
    })
})
*/

/*
//! I can't delete a directory that isn't empty
fs.unlink("./mcs/luffy.txt", function(err, data){
    fs.rmdir("mcs", function(err, data) {})
})
*/