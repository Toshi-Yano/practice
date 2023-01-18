// const doubleNumber = (num) => {
//   return num * 2
// }

// const doubleNumber = num => num * 2;

// const a = doubleNumber(10);
// console.log(a);

const arry = [1, 2, 3, 4];

const a = arry.map((num) => {
  return num * 2;
});
console.log(a);

// 簡略化
const b = arry.map(num => num * 2);
console.log(b);

/**
 * ・引数が1つのみの場合は()を省略可能
 * ・returnする処理を1行で記述できるなら{}を省略可能
 */