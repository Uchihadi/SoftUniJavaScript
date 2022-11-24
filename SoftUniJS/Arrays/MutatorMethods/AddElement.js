let nums = [10, 20, 30, 40, 50, 60, 70];

console.log(`Array's length is: ${nums.length}`);

let insertElement = nums.push(80);

console.log(insertElement);
console.log(nums);

let nums2 = [40, 50, 60];

console.log(`Array's length is: ${nums2.length}`); 

let firstElement = nums2.unshift(30);
console.log(firstElement); 

let secondElement = nums2.unshift(10,20);
console.log(secondElement); 
console.log(nums2);