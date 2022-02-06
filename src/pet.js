function Pet(name, age) {
    this.name = name;
    this.age = 0
    this.hunger = 0
    this.fitness = 10
}
Pet.prototype.growUp = function () {
    this.age += 1;
    this.hunger += 5;
    if (this.fitness < 3) this.fitness === 0;
    else this.fitness -= 3;
};
Pet.prototype.walk = function () {
    if (this.fitness === 7) { this.fitness += 3 };
    if (this.fitness === 8) { this.fitness += 2 };
    if (this.fitness === 9) { this.fitness += 1 };
    if (this.fitness > 10) { this.fitness += 0 };
    if (this.fitness < 7) { this.fitness += 4 };

};

module.exports = Pet;