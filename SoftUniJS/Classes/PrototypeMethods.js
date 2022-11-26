// To add properties or methods to all existing objects, we add them to their prototype.
// In other words, adding a method inside the class body makes it available to all of its instances.

class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;
    }

    // This is a prototype method
    calcArea() {
        return this.sideLength * this.sideLength;
    }
}

const squareOne = new Square(20);
console.log(squareOne.calcArea());

const squareTwo = new Square(35);
console.log(squareTwo.calcArea());