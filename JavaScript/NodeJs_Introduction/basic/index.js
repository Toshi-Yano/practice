// イベントループ
// setTimeout(() => {
//   console.log('setTimeout()');
// }, 0);

// setImmediate(() => {
//   console.log('setImmediate()');
// });

// process.nextTick(() => {
//   console.log('nextTick()');
// });

// Promise.resolve().then(() => {
//   console.log('Promise.resolve()');
// });

// ログ出力
// console.log('Message: %o', { hello: 'world' });
// console.trace('trace');

// 処理時間計測
// let sum = 0;
// console.time('timer1');
// for (let i = 1; i <= 1000; i++) {
//   sum += i;
//   i === 500 && console.timeLog('timer1', sum);
// }
// console.timeEnd('timer1');

// 実行中プログラムに関する情報・操作
// console.log(JSON.stringify(process.env, null, 2));
// console.log(process.argv);
// process.argv.forEach((arg) => {
//   console.log(arg);
// });
// console.log(`cwd : ${process.cwd()}`);
// console.log(`__dirname: ${__dirname}`);
// console.log(process.platform);

// クラス継承
// 1.通常
// class Car {
//   constructor(name) {
//     this.name = name;
//   }

//   drive() {
//     console.log('drive()');
//   }
// }

// class Lamborghini extends Car {
//   constructor(name) {
//     super(name);
//   }
//   echo() {
//     super.drive();
//   }

//   drive() {
//     console.log('extends drive : ' + this.name);
//   }
// }

// const car = new Lamborghini('Lamborghini');
// car.echo();
// car.drive();

// 2. function形式
// const { log } = require('console');
// const util = require('util');
// const Car = function (name) {
//   this.name = name;
// };

// Car.prototype.drive = function () {
//   console.log('drive()');
// };

// const Lamborghini = function (name) {
//   Lamborghini.super_.call(this, name);
// };
// util.inherits(Lamborghini, Car);

// Lamborghini.prototype.echo = function () {
//   Lamborghini.super_.prototype.drive.call(this);
// };

// Lamborghini.prototype.drive = function () {
//   console.log('extends drive : ' + this.name);
// };

// const car = new Lamborghini('Lamborghini');
// car.echo();
// car.drive();
