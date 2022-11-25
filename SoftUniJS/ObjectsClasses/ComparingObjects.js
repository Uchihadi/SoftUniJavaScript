// Two Variables: Two Distinct Objects
let bagOne = { 
    compartments: 10,
    volume: 32
}

let bagTwo = { 
    compartments: 10,
    volume: 32
}

console.log(bagOne == bagTwo);
console.log(bagOne === bagTwo);

// Two Variables: Single Object
let bag1 = { 
    compartments: 10,
    volume: 32
}

let bag2 = bag1;

console.log(bag1 == bag2);
console.log(bag1 === bag2);