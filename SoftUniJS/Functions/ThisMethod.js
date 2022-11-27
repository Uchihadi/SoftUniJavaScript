let cat = {
    name: 'Muffins',
    breed: 'British Shorthair',

    info: function() {
        return `${this.name} is a ${this.breed}.`
    },
    whatIsThis: function() {
        return this;
    }
}
console.log(cat.info());
console.log('******************');
console.log(cat.whatIsThis());

// this is used to access information stored in the object
// "Owns" the object

// Defining a function
function printContext() {
    console.log(this === global);
}
// Creating an object called user
let user = {
    count: 10,
    printContext: printContext,
    printAnotherContext: function() {
        console.log(this === global);
    }
}

user.printContext();

let globalFunction = user.printAnotherContext;

globalFunction();

user.printAnotherContext();