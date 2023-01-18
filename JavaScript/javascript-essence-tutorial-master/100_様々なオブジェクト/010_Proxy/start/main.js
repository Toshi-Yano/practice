const targetObj = { a: 0 };
const handler = {
    set: function(target, prop, value, receiver){
        console.log('called set' + target[prop]);
        target[prop] = value;
    }
};

const pxy = new Proxy(targetObj, handler);
pxy.a = 1;
console.log(targetObj.a);
targetObj.a = 5;
console.log(targetObj.a);