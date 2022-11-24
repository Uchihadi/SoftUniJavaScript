let array = [1, 2, 3, 4, 5];

let isEven = el => {
  // checks whether an element is even
  return el % 2 === 0;
};

console.log(array.some(isEven));