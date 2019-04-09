function Mouse(name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.dead = false;
}

Mouse.prototype.die = function () {
    this.dead = true;
};

Mouse.prototype.peek = function () {
    console.log('Chít chít ...');
};

module.exports = Mouse;
