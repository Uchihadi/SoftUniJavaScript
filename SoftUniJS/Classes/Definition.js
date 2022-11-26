// Inside its body, a class can contain:
// Data (properties and attributes)
// Actions (behavior and modify its state, by means of functions)
// Classes can be instantiated in the form of objects

// Class Declaration
class Person {
    constructor(name, age, city) {
        this.name = name; //this keyword used to set property to objects
        this.age = age;
        this.city = city;
    }
}

let person = new Person('Mike', 37, 'Bern');

// Class Expression
// Can only access this class by its variable name
let Car = class {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
