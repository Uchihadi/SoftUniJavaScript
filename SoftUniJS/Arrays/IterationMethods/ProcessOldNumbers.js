// All Elements at Odd Positions; Multiply them by 2
// Reverse the Order of Elements then Print them on Console on a Single Line

function manipulateArray(input) {
    console.log(input.filter((element, ind) => ind % 2 != 0)
    .map(element => element * 2)
    .reverse()
    .join(' '));
}

manipulateArray ([3, 0 , 10 , 4, -7, 15]);