
// this, is the global object in the browser
// and the global object in node js, that is the window object

/*
function getName(name) {
    console.log(`My name is ${name}`);
}
getName('John');
getName('Saïd')
*/

let person = {
    name: 'John',
    getName: function() {
        console.log(`My name is ${this.name}`);
    }
}

// 1. implicit binding, this is the object that is calling the method getName()
// person.getName(); // (1)


// 2. explicit binding, this is the object that is calling the method getName()
// call
function getName() {
    console.log(`My name is ${this.name}`);
}

// getName.call(person); // (2)


// 3. new binding, this is the object that is calling the method getName()
function Person(name) {
    // this = {};
    this.name = name;
}
let p1 = new Person('John'); // new keyword creates a new object and assign it to this object
let p2 = new Person('Saïd');
console.log(p1.name);
console.log(p2.name);


