import { sum, round } from './numbers.js'; // importando as funções de outro arquivo JS
import Product from './product.js';

console.log(sum(3, 4));
console.log(round(3.37624783, 4));

const obj = new Product("Computador", 800.0, 10);
console.log(obj);