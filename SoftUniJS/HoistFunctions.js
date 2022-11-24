// Array of Numbers

// Find sum of its elements
// Sum of its inverse numbers
// Concatenate its elements
// Print Results

function aggregateElements (elements) {
    function aggregate(arr, initVal, func){
        let val = initVal;
        for (let i = 0; i < arr.length; i++){
            val = func(val, arr[i]);
        };
        console.log(val);
    }

    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1 / b);
    aggregate(elements, '', (a, b) => a + b);
}

aggregateElements([1,2,3]);
aggregateElements([2, 4, 8, 16]);
