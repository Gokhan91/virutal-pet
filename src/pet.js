function Pet(name, age) {
    this.name = name;
    this.age = age
    this.hunger = 0
    this.fitness = 10
}
Pet.prototype.growUp = function () {
    this.age += 1;
    this.hunger += 5;
    if ((this.fitness - 3) < 0) { this.fitness = 0; }
    else this.fitness -= 3;
};
Pet.prototype.walk = function () {
    if (this.fitness === 7) { this.fitness += 3 };
    if (this.fitness === 8) { this.fitness += 2 };
    if (this.fitness === 9) { this.fitness += 1 };
    if (this.fitness > 10) { this.fitness += 0 };
    if (this.fitness < 7) { this.fitness += 4 };

};

Pet.prototype.feed = function () {
    if ((this.hunger - 3) < 0) { this.hunger = 0; }
    else this.hunger -= 3;
};

Pet.prototype.checkUp = function () {
    if (this.fitness <= 3 && this.hunger >= 5) return "I am hungry AND I need a walk";
    if (this.fitness <= 3) return "I need a walk";
    if (this.hunger >= 5) return "I am hungry";
    else return "I feel great!";
};

Pet.prototype.isAlive = function () {
    if (this.fitness === 0) return false;
    if (this.hunger >= 10) return false;
    if (this.age >= 30) return false;
    else return true;
};

module.exports = Pet;