// Used in event handlers, this points to the specific element
// event is fired from.
// Here, we create HTML file & attach following event handler


function solve() {
    let button = document.getElementById('button');

    button.addEventListener('click', function(e) {
        console.log(this);
    });
}

// When referencing this from within an event, it returns the element from which the event was called.
// When used in classes, value of THIS referes to instance of class that you initialise
// classes are templates for creating objects

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.displayInfo = function() {
            console.log(`The vehicle is a ${this.make} ${this.model}.`);
        }
    }
};

let car = new Vehicle('Toyota', 'Corolla');
car.displayInfo();