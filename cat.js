function Cat(name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.stomach = [];
}

Cat.prototype.eat = function (mouse) {
    this.stomach.push(mouse);
    this.weight = this.weight + mouse.weight;
    mouse.die();
    mouse.peek();
};
Cat.prototype.bark = function () {
    console.log("Meo meo...");
}

module.exports = Cat;