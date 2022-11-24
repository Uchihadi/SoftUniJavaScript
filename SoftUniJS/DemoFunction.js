// Numbers: 40, 5, 20
// Find The Largest Number
// Print the Text 'The Largest Number is {Number}

function firstSoln (x, y, z) {
    let result;

    if (x > y && x > z) {
        result = x;
    };

    if (y > x && y > z) {
        result = y;
    };

    if (z > x && z > y) {
        result = z;
    };

    return "The largest number is ${result}.";
}

console.log(firstSoln(40, 5, 20));