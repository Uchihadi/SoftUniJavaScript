
// Assigning Properties (Simple dot notation)
let artist = {};
artist.firstName = 'Elton';
artist.lastName = 'John';
artist.age = 74;
artist.genres = ['Pop rock', 'Glam rock', 'Soft Rock'];

console.log(`${artist.firstName} ${artist.lastName}`)

// Assigning Properties using Bracket Notation
let student = {
    name: 'Joseph',
    'schoolname': 'SoftUni'
}

console.log(student['schoolname']);
console.log(student.schoolname);

// Unassigned properties of objects = Undefined
let book = {
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    genre: 'Novel'
};

console.log(book.age);