
// Object Methods (Actions that can be performed on objects)
// Methods are stored in properties as function definitions
// Property Declaration
let dog = {
    name: 'Cooper',
    breed: 'German Shepherd',
    bark: function() {
        console.log('Woof🐶');
    }
}

// Function Declaration
dog.bark();

let city = {
    name: 'Berlin',
    country: 'Germany',
    population: 3769495,
    summarize() {
        console.log(`${this.name} is a city in ${this.country} with a population of ${this.population}.`);
    }
}

city.summarize();