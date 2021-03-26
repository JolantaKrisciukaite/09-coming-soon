import {suma} from './components/sum.js';
import {multiply as daugyba} from './components/multiply.js';

import {matematika} from './components/matematika.js';

const rez1lt = matematika.sudeti(8, 5);
const rez2lt = matematika.atimti(8, 5);
const rez3lt = matematika.sudauginti(8, 5);
const rez4lt = matematika.dalinti(8, 5);

const rez1en = matematika.sum(8, 5);
const rez2en = matematika.subtract(8, 5);
const rez3en = matematika.multiply(8, 5);
const rez4en = matematika.divide(8, 5);

const rez1rus1 = matematika.rus1(8, 5);
const rez2rus2 = matematika.rus2(8, 5);
const rez3rus3 = matematika.rus3(8, 5);
const rez4rus4 = matematika.rus4(8, 5);

console.log(rez1lt);
console.log(rez2lt);
console.log(rez3lt);
console.log(rez4lt);

console.log(rez1en);
console.log(rez2en);
console.log(rez3en);
console.log(rez4en);

console.log(rez1rus1);
console.log(rez2rus2);
console.log(rez3rus3);
console.log(rez4rus4);

