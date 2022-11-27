// Inner Functions are functions nested inside other functions
let socialMediaUser = {
    name: 'John Doe',
    pageLikes: ['Cute Cats Page', 'Web Programming Gurus', 'SoftUni International'],
    displayLikes: function() {
        this.pageLikes.forEach(function(page) {
            console.log(`User: ${this.name} likes: ${page}`);
        });
    }
}
socialMediaUser.displayLikes();

// this call from within nested function does not work
// We use arrow functions instead to call this method
let socialMediaUser1 = {
    name: 'John Doe',
    pageLikes: ['Cute Cats Page', 'Web Programming Gurus', 'SoftUni International'],
    displayLikes: function() {
        this.pageLikes.forEach((page) => {
            console.log(`User: ${this.name} likes: ${page}`);
        });
    }
}
socialMediaUser1.displayLikes();

// Within arrow func (=>), this retains value of enclosed lexical context
// They inherit the reference of this (From the parent object or scope)