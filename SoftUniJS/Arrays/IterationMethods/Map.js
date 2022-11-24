let numbersAsStrings = ['1', '2', '3'];

// parse all numbersAsStrings to numbers
// creates a new array with the results of calling a provided function
// on every element in the calling array
let numbers = numbersAsStrings.map(x => Number(x));
console.log(numbers);

let numbersAsStrings2 = ['1', '2', '3'];

// parse all numbersAsStrings to numbers
let numbers2 = numbersAsStrings2
                     .map(x => Number(x))
                     .map(x => x + 1); // add 1 ot each number
console.log(numbers2);