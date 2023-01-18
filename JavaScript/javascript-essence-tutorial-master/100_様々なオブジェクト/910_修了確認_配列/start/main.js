/**
 * 問題：
 * Arrayを継承して以下のメソッドを実装してみましょう。
 *
 * push(*1)
 * forEach
 * map
 * filter
 * reduce
 *
 * *1:pushはチェーンメソッドとしてつなげられるように実装してみてください。
 */
class MyArray extends Array {
	constructor(...args) {
		super(...args)
	}

	print(label = '') {
		console.log(`%c ${label}`, 'color: blue; font-weight: 600;', this);
		return this;
	}

	push(arg){
		super.push(arg);
		return this;
	}

	forEach(cb){
		for(let i = 0; i < this.length; i++){
			cb(this[i], i, this);
		}
	}

	map(cb){
		// let arry = [];
		const newInstance = new MyArray();
		for(let i =0; i < this.length; i++){
			newInstance.push(cb(this[i], i, this));
		}
		return newInstance;
	}

	filter(cb){
		const newInstance = new MyArray();
		for(let i = 0; i < this.length; i++){
			if(cb(this[i], i, this)){
				newInstance.push(this[i]);
			}
		}
		return newInstance;
	}

	reduce(cb, accu){
		const newArry = [...this];

		if(accu === undefined){
			accu = newArry.shift();
		}

		for(let i = 0; i < newArry.length; i++){
			accu = cb(accu, newArry[i]);
		}

		return newArry;
	}
}

function double(v, i, obj) {
	return v * 2;
}

const original = new MyArray(1, 2, 3, 4);

const result = original
	.map(double)
	.push(5)
	// .print('prace1')
	.filter(function (v, i) {
		return v > 2;
	})
	// .reduce(function(accu, curr) {
	// 	return accu + curr;
	// })

console.log('%coriginal', 'color: blue; font-weight: bold;', original);
console.log('%cresult', 'color: red; font-weight: bold;', result);

