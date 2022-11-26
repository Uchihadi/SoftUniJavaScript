// Call them on the class itself, because they lack access to instance data.
class Car {
    constructor(name) {
      this.name = name;
    }
// calling static method
    static hello() {
      return "This is a static method!";
    }
  }
  
  let myCar = new Car("Mazda");

  // JavaScript classes support both instance and static methods.
  // Static methods refer to the class, rather than to an instance of it
  // They can call other instance methods, as well as any static method.