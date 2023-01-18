// function F(a, b) {
//     this.a = a;
//     this.b = b;
//     return {a: 1};
// }

// F.prototype.c = function() {}

// function newOpe(C, ...args) {
//     const _this = Object.create(C.prototype);
//     const result = C.apply(_this, args);
//     console.log(typeof result);
//     if(typeof result === "object" && result !== null) {
//         return result;
//     }

//     return _this;
// }

// const instance = newOpe(F, 1, 2);
// console.log(instance)

let name = 'John';

let a = {
    name: 'Tom',
    b: {
        name: 'Toshi',
        bye() {
            console.log('Bye' + this.name);
        },
        c: {
            name: 'Yano',
            hey() {
                console.log(this.name);
            }
        }
    },
    hello() {
        console.log('hello' + this.name);
        // this.b.bye();
    },
}

a.hello();
a.b.bye();
a.b.c.hey();