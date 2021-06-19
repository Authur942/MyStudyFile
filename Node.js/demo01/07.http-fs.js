// 1.先引入http和fs两个核心模块
var http = require('http')
var fs = require('fs')

// 2.声明一个变量接收http.createServer()这个函数对象
var server = http.createServer()

// 调用http.createServer()里面的on方法，监听server的request请求事件。
server.on('request',function(req,res){
  var url = req.url
  if (url === '/') {
    fs.readFile('../demo01/data/hello.txt',function(err,data){
      if (err) {
        console.log('文件读取失败')
      } else if (data) {
        res.setHeader('Content-Type','text/plain;charset=utf-8')
        res.end(data.toString())
      }
    })
  } else if (url === '/index') {
      fs.readFile('../demo01/resourse/index.html',function(err,data){
      if (err) {
        console.log('文件读取失败')
      } else if (data) {
        res.setHeader('Content-Type','text/html;charset=utf-8')
        res.end(data.toString())
      }
    })
  } else if (url === '/image') {
    fs.readFile('./resourse/lang.jpg',function(err,data){
      if (err) {
        console.log('文件读取失败')
      } else {
        res.setHeader('Content-Type','image/jpeg')
        res.end(data)
      }
    })
  }
})

// 监听这个服务，启用3000端口号
server.listen(3000,function(){
  console.log('Server is running......')
})