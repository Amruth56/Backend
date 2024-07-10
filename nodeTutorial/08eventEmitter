// // import the built-in Node.js events module. This module provides an implementation of the EventEmitter class, which allows you to work with custom events.

// import { header } from "express/lib/request";

var events = require("events");
// var myEmitter = new events.EventEmitter();


// // set up an event listener for an event named "someEvent" using the on method
// myEmitter.on("someEvent", function (mssg) {
//   console.log(mssg);
// });

// // When this line is executed, the registered event listener (the callback function) will be triggered, and it will log the message to the console.
// myEmitter.emit("someEvent", "the event was emitted");



var util = require('util')

var Person = function(name){
    this.name = name;
}

util.inherits (Person, events.EventEmitter);
var james = new Person('james')
var mary = new Person('mary')
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said ' + mssg )
    })
})
james.emit('speak', "hey dude ")