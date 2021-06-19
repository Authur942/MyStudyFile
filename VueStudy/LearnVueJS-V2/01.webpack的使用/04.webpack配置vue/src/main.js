// 使用commonjs模块化的规范导入
const {add,mul} = require('./js/mathUtil.js')

console.log(add(30,20));
console.log(mul(10,80));

// 使用ES6的模块化规范导入
import {name,height,age} from './js/info.js';

console.log(name);
console.log(height);
console.log(age);

// 引入CSS依赖模块
require('./css/nolmal.css');

// 引入less依赖
require('./css/spacial.less');
document.writeln('<h1>你好啊，张港滨</h1>');

import Vue from 'vue'
import App from './vue/app.vue'


new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})