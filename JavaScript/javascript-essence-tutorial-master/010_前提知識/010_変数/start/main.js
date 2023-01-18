function A(name){
    this.name = name;
}
A.prototype.hello = function(){
    console.log('hello ' + this.name);
}

function B(name, price){
    this.name = name;
    this.price = price;
}

const dog = new A('dog');
const dog2 = new A('dog2');
const cat = new B('cat', 10000);

dog.hello();
dog2.hello();
// cat.hello();
console.log(cat);
