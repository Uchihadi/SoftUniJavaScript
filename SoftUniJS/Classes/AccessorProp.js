// Using Getters & Setters for Accessing Properties
// Data Properties vs Accessor Properties

class User {
  constructor(name, surname) {
    this.name = "John";
    this.surname= "Smith";
  }

  //
  get fullName() {
    return `${this.name} ${this.surname}`;
  }

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  }
};

let userOne = new User();

userOne.fullName = 'James Cooper';

// Accessor Properties in Action
// accessor properties to modify an object's property values after its creation:
class Teacher {
    constructor (fullName, subject){
        this.fullName = fullName;
        this.subject = subject;
    }
}

// we use dot notation to change the subject property of the myTeacher object.
let myTeacher = new Teacher('Dale Oliver', 'History');
console.log(myTeacher.subject);

myTeacher.subject = 'Programming';
console.log(myTeacher.subject);

// Can also be done using Bracket Notation
myTeacher['subject'] = 'Programming';