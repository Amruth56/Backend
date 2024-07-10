var until = require('until')

var Person = function(name){
    this.name = name;
}

until.inheritance(Person, events.EventEmitter);
var james = new Person('james')
var mary = new Person('mary')
var ryt = new Person('ryt');
var ppl = [james, mary, ryu];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said ' + mssg )
    })
})
james.emit('speak', "hey dude ")