let country = {
    name: 'United Kingdom',
    capital: 'London',
    population: 64886004,
    language: 'english'
};

console.log(country.name);

// Key value pairs
let personOne = {
    name: 'Michelle',
    age: '35',
    city: 'Los Angeles'
};

// Variables that are holding References
let personTwo = personOne;

console.log(`The first person's name is ${personOne.name}.`);
console.log(`The second person's name is ${personTwo.name}.`);

personOne.name = 'Maria';

console.log(`The first person's name is ${personOne.name}.`);
console.log(`The second person's name is ${personTwo.name}.`);

// Object Properties of Key Value Pairs
let color = {
    name: 'red',
    rgbValues: [255, 0, 0],
    hexTriplet: '#FF0000'
};

console.log(color);