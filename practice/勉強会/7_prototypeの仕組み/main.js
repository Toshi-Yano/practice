function Person(name, age) {
  this.name = name;
  this.age = age;
  // this.hello = function() {
  //     console.log('OwnProperty: hello ' + this.name);
  // };
}

Person.prototype.hello = function() {
  console.log('Person: hello ' + this.name);
}

const bob = new Person('Bob', 18);
// bob.hello();

console.log(bob);
console.log(bob.__proto__ === Person.prototype);
console.log(typeof bob.__proto__);
console.log(Person.prototype);