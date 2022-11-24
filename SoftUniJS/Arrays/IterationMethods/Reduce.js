let numbers = [7, 6, 1, 5, 2, 13];

const sumReducer = (acc, c) => acc + c;
let result = numbers.reduce(sumReducer, 0);

console.log(result);

let numbers2 = [7, 6, 1, 5, 2, 13];

let avarege = numbers2.reduce((acc, c, i, arr) => acc + c /arr.length, 0);

console.log(avarege);

let numbers3 = [7, 6, 1, 5, 2, 13];

let max = numbers3.reduce((acc, c) => Math.max(acc, c));

console.log(max);