//Array of Strings (Mutator Method / Sorting of Strings)
['Peter', 'Anna', 'Ivan', 'George']

// Sort them in ascending alphabetical order & print on the console
function sortAscendingOrder (input) {
    console.log(input.sort((a, b) => a.localeCompare(b)).join(' '));
}

// Sort them in descending alphabetical order & print on the console
function sortDescendingOrder (input) {
    console.log(input.sort((a, b) => b.localeCompare(a)).join(' '));
}

// Expected Output: Anna George Ivan Peter
sortAscendingOrder(['Peter', 'Anna', 'Ivan', 'George']);

sortDescendingOrder(['Peter', 'Anna', 'Ivan', 'George']);