// Four ways to select an element:
// getElementById() - Returns only one element with the desired id
// getElementsByTagName() - Returns an array of the elements with this tag
// getElementsByClassName() - Returns an array of the elements with this class
// querySelector() - Returns the first element to match the selector, or null if there are none

// HTML DOM Manipulations
// .innerHTML - A property for accessing and changing the HTML of an element
// .attributes - A property that returns all attributes of an element in a collection
// Every item in that collection has two values - attribute and value:
// .setAttribute() - A method, used to add an attribute to an element, or update it, if the element already has the given attribute
// .style - A property, used to directly update the CSS of an element

<h1 id="title">This is the title of a website</h1>
let h1 = document.getElementById("title");
h1.style.color = "blue"; // .color selects the CSS property to be changed and "blue" specifies its value

// .removeChild() - A method, that removes and returns a child from an HTML element
// .appendChild() - A method, that adds a child to the back of an element
// .replaceChild() - A method, that replaces one HTML element with another
// It takes two parameters - the element to be replaced and the element to replace it with.
// .document.write() - A method, used to write text directly into the HTML document

