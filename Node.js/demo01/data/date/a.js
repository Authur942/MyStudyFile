var foo = 'aaa'
console.log('a start')
require('./b')
// 在根目录中不能够省略./
// 在node中没有全局作用域概念，只有模块化作用域，也就是文件作用域
console.log('foo的值为' + foo)
function aaa(A,AA){
	result = A + AA
}
aaa(2,2)
console.log(result)
console.log('a end')