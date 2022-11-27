// Browser Object Models
// BOM acts as a connections like DOM
// connects JavaScript to the browser the same way the DOM connects it to the HTML document.
// BOM allows browser elements to be accessed and manipulated by representing them as objects.

var name = "Steven";
// name is now stored as a property of the window object

function printYear() {
    console.log(2020);
}
// PrintYear is now a method of the window object

name === window.name;
// returns true

window.printYear();
// invokes the function through the window object

// BOM can be used to play around:

console.log(navigator.deviceMemory); // Displays the RAM memory of the current machine

document.location = "https://softuni.org"; // Redirects to given location

history.back(); // Goes back one time

console.log(location.host); // Displays the current host

location.reload(); // Reloads the page