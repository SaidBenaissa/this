
// this, is the global object in the browser
// and the global object in node js, that is the window object

/* conclusion, the order of precedence is:
    // 1. New binding
    // 2. Explicit binding
    // 3. Implicit binding
    // 4. Default binding
*/

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

global.name = 'Saïd';

function getName() {
    console.log(`My name is ${this.name}`);
}

// getName.call(person); // (2)


// 3. new binding, this is the object that is calling the method getName()
function Person(name) {
    // this = {}; // reference to the new object
    this.name = name;
}
let p1 = new Person('John'); // new keyword creates a new object and assign it to this object
let p2 = new Person('Saïd');
// console.log(p1.name, p2.name);


// (4) default binding, this is the global object
getName(); // (4), if non of the above rules apply, the default binding is the global object


