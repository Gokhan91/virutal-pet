const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});
describe('constructor', () => {
    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });
});
describe('constructor', () => {
    it('has a initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });
    describe('constructor', () => {
        it('has a initial fitness of 10', () => {
            const pet = new Pet('Fido');
            expect(pet.fitness).toEqual(10);
        });
    });
    describe('growUp', () => {
        it('increments the age by 1', () => {
            const pet = new Pet('Fido');

            pet.growUp();

            expect(pet.age).toEqual(1);
            expect(pet.hunger).toEqual(5);
            expect(pet.fitness).toEqual(7);
        });
    });
    describe('walk', () => {
        it('increases fitness by 4', () => {
            const pet = new Pet('fido');

            pet.fitness = 4;
            pet.walk();

            expect(pet.fitness).toEqual(8);
        });
    });
    describe('feed', () => {
        it('decreases hunger by 3', () => {
            const pet = new Pet('Fido');
            pet.hunger = 5
            pet.feed();
            expect(pet.hunger).toEqual(2);
        });
        it('decreases hunger by 3', () => {
            const pet = new Pet('Fido');
            pet.hunger = 2
            pet.feed();
            expect(pet.hunger).toEqual(0);
        });
        it('throws an error if the pet is not alive', () => {
            const pet = new Pet('Fido');

            pet.age = 30;

            expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
        });

    });

    describe('checkUp', () => {
        it('returns I need a walk if fitness is 3 or less', () => {
            const pet = new Pet('Fido');
            pet.fitness = 2
            pet.checkUp();
            expect("I need a walk");
        });
        it('returns I am hungry if hunger is 5 or more', () => {
            const pet = new Pet('Fido');
            pet.hunger = 7
            pet.checkUp();
            expect("I am hungry");
        });
        it('returns I am hungry AND I need a walk if hunger is 5 or more and fitness is 3 or less', () => {
            const pet = new Pet('Fido');
            pet.hunger = 7
            pet.fitness = 2
            pet.checkUp();
            expect("I am hungry AND I need a walk");
        });

        it('returns I feel great if hunger is less then 5 and fitness is more than 3', () => {
            const pet = new Pet('Fido');
            pet.hunger = 2
            pet.fitness = 6
            pet.checkUp();
            expect("I feel great!");
        });
    });

    describe('isAlive', () => {
        it('returns false if fitness is 0 or less', () => {
            const pet = new Pet('Fido');
            pet.fitness = 0
            pet.isAlive();
            expect(false);
        });
        it('returns false is hunger is 10 or more', () => {
            const pet = new Pet('Fido');
            pet.hunger = 15
            pet.isAlive();
            expect(false);
        });
        it('returns false if age is 30 or more', () => {
            const pet = new Pet('Fido');
            pet.age = 35
            pet.isAlive();
            expect(false);
        });

        it('returns true if not dead', () => {
            const pet = new Pet('Fido');
            pet.hunger = 2
            pet.fitness = 6
            pet.isAlive();
            expect(true);
        });
    });
});
