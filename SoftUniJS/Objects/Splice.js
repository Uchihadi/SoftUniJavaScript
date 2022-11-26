let nums = [1, 3, 4, 5, 6];

// Inserts at index 1
nums.splice(1, 0, 2); 
console.log(nums);

// Replaces 1 element at index 4
nums.splice(4, 1, 19); 
console.log(nums);

// Removes 1 element at index 2
let el = nums.splice(2, 1); //Only two arguments when deleting
console.log(nums); 
console.log(el);