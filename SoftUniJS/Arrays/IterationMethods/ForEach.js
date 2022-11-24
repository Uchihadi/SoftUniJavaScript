const names = ['Peter', 'George', 'Arnold'];
const copy = [];

names.forEach(name => { copy.push(name); });

console.log(copy);

const names2 = ['Peter', 'George', 'Arnold'];

names.forEach((names2, index) => console.log(`${index} -> ${names2}`));