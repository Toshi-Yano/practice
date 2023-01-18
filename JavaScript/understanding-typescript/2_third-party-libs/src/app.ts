import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Product } from './product.model';

const products = [
  { title: '商品1', price: 100 },
  { title: '商品2', price: 200 },
];

// const p1 = new Product('商品1', 100);

// const loadedProducts = products.map((p) => new Product(p.title, p.price));

const loadedProducts = plainToInstance(Product, products);

for (const p of loadedProducts) {
  console.log(p.getInformation());
}

const newProd = new Product('', -100);
validate(newProd).then((errors) => {
  if (errors.length) {
    console.log('エラー');
    console.log(errors);
  }
});
console.log(newProd.getInformation());
