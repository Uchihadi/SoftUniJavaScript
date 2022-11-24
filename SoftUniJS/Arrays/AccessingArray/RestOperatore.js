let numbers = [10, 20, 30, 40, 50];
let [firstNumber, secondNumber, ...rest] = numbers;

console.log(firstNumber) // First element
console.log(secondNumber) // Second element
console.log(rest) // Rest of the numbers

let numbers2 = [10, 20, 30, 40, 50];
let [...rest2] = numbers2;

console.log(rest2 == numbers2);