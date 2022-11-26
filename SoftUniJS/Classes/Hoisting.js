// Using variables and functions before they are declared
// We use VAR keyword
favoriteGame = 'Rise of the Tomb Raider 🎮';

console.log(favoriteGame);

var favoriteGame;

// we still cannot access the values of variables declared with let and const.
currentWeather = 'rainy 🌦'; // ReferenceError

let currentWeather;

// Hoisting does not apply to neither class declarations nor class expressions.
const mountainBike = new Bike('Trek Bikes 🚲', 'mountain 🏔', 'Kenda Kwest 28x700');

class Bike { // Reference Error
    constructor(brand, type, tires) {
        this.brand = brand;
        this.type = type;
        this.tires = tires;
    }
}