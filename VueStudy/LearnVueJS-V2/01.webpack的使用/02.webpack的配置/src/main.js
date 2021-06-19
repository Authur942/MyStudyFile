// 使用commonjs的模块化
const {add,mul} = require('./mathUtils')

console.log(add(20,30));
console.log(mul(30,40));

// 采用ES6的模块化规范
import {name,age,height} from './info'

console.log(name);
console.log(age);
console.log(height);