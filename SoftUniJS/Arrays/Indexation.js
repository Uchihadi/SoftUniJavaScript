let arr = [];
arr[3.4] = 'Oranges';
arr[-1] = 'Apples';
console.log(arr.length);               
console.log(arr.hasOwnProperty(3.4));

arr['fruit'] = 'Grapes';
console.log(arr.length);
console.log(arr);