
function Dog(name, hungerLevel) {
	this.name = name;
	this.hungerLevel = hungerLevel;
}

Dog.prototype.eat = function() {
	if(this.hungerLevel > 0)	this.hungerLevel--;
};

module.exports = Dog;