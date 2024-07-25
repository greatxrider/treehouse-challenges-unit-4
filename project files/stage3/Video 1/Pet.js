class Pet {
    constructor(animal, age, breed) {
        this.animal = animal;
        this.age = age;
        this.breed = breed;
    }

    describe() {
        return `${this.animal} is a ${this.age}-year-old ${this.breed}.`;
    }
}

const myPet = new Pet('dog', 5, 'beagle');
