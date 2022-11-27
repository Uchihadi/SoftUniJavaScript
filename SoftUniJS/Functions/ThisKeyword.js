// Function context is the object that owns the currently executed code
// Function == this object
// Global Invoke: Func(); object.function(); domElement.event()

// obj.function() - this is a method, executed within context of object
// domElement.event() - invoked on a DOM element
// this is a global function

// We can manually change context of function using call() apply() bind()

// this is reference to an object; value is based on context
// The object this refers to changes every time execution context changed

// Differences in STRICT MODE

// function solve() {
//     return this;
// }

var a = "a";
console.log(this.a);

let b = "b";
console.log(this.b); //undefined

function thisInBrowser() {
    console.log('Simple function call');
    console.log(this === window);
}
thisInBrowser();

let name = 'Arthur';
console.log('My name is', this.name);

var anotherName = 'Chris';
console.log('My name is ', this.anotherName);

