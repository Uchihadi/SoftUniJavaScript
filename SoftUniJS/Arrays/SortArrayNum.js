// Array of Numbers
// [3, 0, 10, 4, 7, 15, -5]

// Sort in ascending order then print on the console
//(input) --> Array of Number Elements
function sortAscendingNum1 (input) {
    console.log(input.sort(function(a, b){
        if (a > b) return 1; // sorting themselves; the bigger num goes to right
        if (a < b) return -1; // sorting themselves; the smaller num goes to left
        return 0;
    }).join(' '))
}

// Another way of doing it, sorting the arrays joined by space in between
function sortAscendingNum2 (input) {
    console.log(input.sort((a, b) => a - b).join(' '));
}

function sortDescendingNum2 (input) {
    console.log(input.sort((a, b) => b - a).join(' '));
}

sortAscendingNum1([3, 0, 10, 4, 7, 15, -5]);

sortAscendingNum2([3, 0, 10, 4, 7, 15, -5]);

sortDescendingNum2([3, 0, 10, 4, 7, 15, -5]);