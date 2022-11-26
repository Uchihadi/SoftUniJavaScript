// Private Properties --> # symbol
// Only accessible from inside classes
// Accessing a private property from outside its parent class results in an error.
// To make private property readable, we usegetters and setters to make them public.


class iceCreamMaker {​
    #milkInLitres;
    constructor() {​
        this.#milkInLitres = 50;
        this.#sugarInKg = 30;​ // SyntaxError
    }​
}​

const machine = new iceCreamMaker();​
// machine.#milkInLitres === 40 // SyntaxError

// Using getters and setters to make them public
class iceCreamMaker2 {​
    #milkInLitres;
    constructor() {​
        this.#milkInLitres = 50;
    }​

    get milkInLitres() { 
      return this.#milkInLitres;
    }​
}​

const machine1 = new iceCreamMaker2();​
console.log(machine1.milkInLitres); // 50