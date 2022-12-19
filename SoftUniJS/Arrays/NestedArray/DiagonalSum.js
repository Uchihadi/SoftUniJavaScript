function diagonalSum (input) {
    let firstDiagonal = 0; //Initialise the firstDiagonal
    let secondDiagonal = 0; //Initialise the secondDiagonal
    let firstIndex = 0;
    let secondIndex = input[0].length - 1;

    input.forEach (array => {
        firstDiagonal += array[firstIndex++];
        secondDiagonal += array[secondIndex--];

    })
    console.log(firstDiagonal + ' ' + secondDiagonal);
}

diagonalSum([
    [20, 40], [10, 60]
])