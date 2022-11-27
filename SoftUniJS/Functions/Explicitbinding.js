// Occurs when this keyword is changed to call(), apply() bind are used on function
// Forces a function call to use object (Binding)
// Allows us to bind a function to a particular object

function speak(message) {
    console.log(`My name is ${this.name}. ${message}`);
}

let person = {
    name: 'John'
};

speak.call(person, 'This is my story...');
// We explicitly bound the object person to the speak() function using call().
// speak() is a mehtod that belongs to an object