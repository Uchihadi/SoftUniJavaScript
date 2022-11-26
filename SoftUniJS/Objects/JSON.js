// Square Brackets to hold Arrays, Curly Brackets to hold Objects
// Data is in key-value pairs separated by commas

// {
//     "id": 98953,
//     "name": "Glenna Miller",
//     "username": "glennar57",
//     "email": "glenna_r@gmail.com",
//     "favoriteNums": [4, 82, 39, 174], 
//     "friendList": {
//         "73827": "Logan Pearson",
//         "27834": "Alexandra Walters",
//         "93421": "Nathan Adams"
//     }
// }

// {
//     "posts": [
//       { "id": 1, "title": "JavaScript is Awesome", "author": "michaelp_95" },
//       { "id": 2, "title": "How to Set Up Windows 10", "author": "jacob17" },
//       { "id": 3, "title": "Why I Think Java is Great for Beginners", "author": "jane_garcia" },
//     ]
//   }

// Use of JSON is to read data from web server --> Display data on web page
// JSON.parse to convert JSON to JavaScript object
let car = '{"make":"Renault","model":"Clio","colour":"grey"}';  

let data = JSON.parse(car);  

console.log(data);

// Using JSON.stringify to convert objects into strings
// Can be done the same for the Arrays (In JSON format)
let notebook = {
    pages: '120',
    size: 'A4',
    manufacturedBy: 'Rocketbook',
};

let cities = ['London', 'Bucharest', 'Paris']

let notebookData = JSON.stringify(notebook);
let cityData = JSON.stringify(cities);

console.log(notebookData);
console.log(cityData);