var http = require('http')
var server = http.createServer()
server.on('request',function(request,response){
  console.log('收到客户端请求啦，请求路径是' + request.url)
  // response.end('hello node.js')
  /**
   * 根据不同的路径来进行响应数据
   * 所有的url都是以 / 开头的
   */
var url = request.url
  // if (url === '/') {
  //   response.end('index page')
  // } else if (url === '/login') {
  //   response.end('login page')
  // } else {
  //   response.end('404 Not Found!')
    /**
     * 这里的感叹号如果是中文的感叹号则会出现乱码的错误，
     * 猜想：可能在Node的机制里读写的数据都是以二进制和十六进制之间转换的
     */
  // }
  // 这里是一个假设例子
  if (url === '/phone') {
    var phone = [
      {
        name: '苹果 X',
        price: 2000
      },
      {
        name: '菠萝 X',
        price: 2000
      },
      {
        name: '小辣椒 X',
        price: 2000
      }
    ]
    // 注意！所有的响应内容都是二进制或者是字符串，JSON.stringify()将数组转成字符串
    response.end(JSON.stringify(phone))
  }
})

server.listen(3000,function(){
  console.log('服务器已经启动啦，可以通过 http://127.0.0.1:3000/ 来进行访问')
})