function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function() {
        console.log('OwnProperty: hello ' + this.name);
    };
    // this.hasOwnProperty = function(name) {
    //   console.log(name);
    // }
}

Person.prototype.hello = function() {
    console.log('Person: hello ' + this.name);
}

Object.prototype.hello = function() {
    console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);
// bob.hello();
// console.log(bob);

// console.log(bob);
// console.log(bob instanceof Person);
// console.log(bob instanceof Object);

// console.log(bob.hasOwnProperty('hello'));
// console.log('hasOwnProperty' in Person);
