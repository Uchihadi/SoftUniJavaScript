// Programming API for HTML and XML documents
// DOM Methods & Properties
let p = document.createElement('p');
let section = document.createElement('section');

// Performing DOM manipulations
let container = document.getElementById('container');
let h1 = document.getElementById('heading');
let content = document.getElementById('content');

h1.remove();

container.removeChild(content);

// Accessing and using the browser's objects with JavaScript
console.log(navigator.deviceMemory);
document.location = 'https://softuni.org';
history.back();

// Next lesson: DOM Manipulations & DOM manipulating operations
