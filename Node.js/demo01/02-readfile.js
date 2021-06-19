// fs是file-system的简写，其实就是文件系统的意思
// 如果node中需要进行文件操作，就必须引入fs这个核心模块
// 在fs这个核心模块中，就提供了所有文件操作相关的API
// 例如：fs.readFile()就是用来读取文件的
var fs = require('fs')

// readFile()
/**
 * 第一个参数是文件的路径，第二个参数则是一个回调函数，里面分别有error和data两个参数
 * 如果读取失败
 *    error 返回错误结果
 *    data 返回undefined
 * 如果读取成功
 *    error 返回null
 *    data 返回数据
 */
fs.readFile('./data/hello.txt', function (error,data){
  console.log(data.toString())
  // <Buffer e4 bd a0 e5 a5 bd ef bc 8c 6e 6f 64 65 2e 6a 73 0d 0a 68 65 6c 6c 6f 20 6e 6f 64 65 2e 6a 73>
  // 文件中存储的其实都是二进制数据，为什么看不到0 和 1 ？ 因为二进制转换为了十六进制的数据
  // 用toString()方法可以转换为我们能认识的数据
})

// writeFile()
/**
 * 第一个参数是 路径
 * 第二个参数 文件内容
 * 第三个参数 回调函数
 * 如果成功则会创建文件并写入内容
 */
fs.writeFile('./data/a.txt','大家好，我是node.js',function(error){
  if (error) {
    console.log('程序出错啦',error)
  } else {
    console.log('文件成功创建并写入内容啦！')
  }
})
