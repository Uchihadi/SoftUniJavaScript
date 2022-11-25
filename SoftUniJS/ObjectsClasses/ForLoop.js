// ForIn Looping (Iterating a specified variables)
// Using key to access the value of each property from the object
let pencil = {
    brand: 'BIC',
    type: 'liquid graphite',
    size: 2,
    shape: 'hexagonal'
};

for (let key in pencil) {
    console.log(`${key}: ${pencil[key]}`);
}


// ForOf Loop
// To Loop Through Iterable Objects
let computer = {
    processor: 'Intel Core i7',
    memory: 'SKHynix 8GB DDR4',
    hardDrive: 'Samsung 256GB SSD'
};

for (const key of Object.keys(computer)) {
    console.log(key);
}

console.log('------------------------------');
  
for (const value of Object.values(computer)) {
    console.log(value);
}

console.log('------------------------------');

for (const [key, value] of Object.entries(computer)) {
    console.log(`computer.${key} = ${value}`);
}