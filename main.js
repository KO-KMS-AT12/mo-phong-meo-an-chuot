var Mouse = require('./mouse.js');
var Cat = require('./cat.js');

const LOG = console.log;

var mickey = new Mouse('mickey', 3, 15);
var jelly = new Mouse('jelly', 1, 22);
LOG(mickey);
LOG(jelly);

var tom = new Cat('Tom', 8, 20);
LOG(tom);

if (tom.speed > mickey.speed) {
    tom.eat(mickey);
    tom.bark();
}
if (tom.speed > jelly.speed) {
    tom.eat(jelly);
    tom.bark();
}
LOG(tom);
