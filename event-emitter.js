//* how to import a core inbuilt module (we don't need a path)
var events = require("events");
//? this also returns an event emitter, that we can use to handle our custom events
var customEmitter = new events.EventEmitter()
customEmitter.on('scoring', function(msg){ //? event listener
    console.log(msg);
})
//? and event emitter
customEmitter.emit('scoring', 'Itoshi Rin always scoring');

var util = require("util");
//* this core module allows us to inherit object properties

var Player = function(name){
    this.name = name;
}

util.inherits(Player, events.EventEmitter);
//* this makes any instance of Player have customEmitter events

var isagi = new Player("Isagi");
var karasu = new Player("Karasu");
var reji = new Player("Reji");
var players = [isagi, karasu, reji];

players.forEach(function(player){
    player.on('brag', function(msg){
        console.log(player.name + " said: " + msg);
    })
})

isagi.emit('brag', "I'll be the number one striker")
karasu.emit('brag', "You know nothing dumbasses")
reji.emit('brag', "Cross that ball already")