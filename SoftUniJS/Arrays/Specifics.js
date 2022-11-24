let elements = [];
console.log(`The length of the array is: ${elements.length}`);

// Resize the array
elements[0] = 10; 
elements[1] = 20;
elements[2] = 30;

console.log(`The length after resizing is: ${elements.length}`);

let elements2 = [];

elements2[0] = 10; 
elements2[5] = 20;
elements2[10] = 30;

console.log(`The length of the array is: ${elements2.length}`);

console.log(`elements[0] = ${elements2[0]}`);
console.log(`elements[1] = ${elements2[1]}`);
console.log(`elements[5] = ${elements2[5]}`);

let elements3 = [10, 20, 30];
console.log(`Element on index 1 is: ${elements3[1]}`);

elements3[1] = 100;

console.log(`The new element on index 1 is: ${elements3[1]}`);