// 先引入node的核心模块http
var http = require('http')

// 返回一个实例
// 创建服务器用http的createServer()方法
var server = http.createServer()

// 接受客户端发送的请求
/**
 * 回调函数中传入两个参数，一个是request请求对象，一个是response响应对象
 */
server.on('request',function(request,response){
  console.log('收到客户端的请求了，请求路径是' + request.url)
  // 服务器响应返回的数据
  // response.write('hello')
  // response.write(' node.js')
  /**
   * 切忌响应返回数据的时候一定要用end()方法来进行结束，否则服务器会一直处于等待的状态
   * 
   * 也可以将返回的数据直接写在end()中，因为根据不同的路径做出不同的响应，也就是一个路径一个响应
   */
  response.end('hello node.js')
})

// 启动服务器
/**
 * listen()方法用来启动并监听服务器
 * 第一个参数 端口号
 * 第二个参数 回调函数
 */
server.listen(3000,function(){
  console.log('服务器启动成功啦，可以通过 http://127.0.0.1:3000/ 来进行访问')
  // 在端口中自动会带有“/”这个根路径
})
