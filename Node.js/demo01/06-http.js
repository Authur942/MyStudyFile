var http = require('http')

var server = http.createServer()

server.on('request',function(req,res){
  var url = req.url

  if (url === '/login') {
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end('你好世界')
  } else if (url === '/'){
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end('<p>你好呀<a href="https://www.baidu.com/">点我</a></p>')
  }
})

server.listen(3000,function(){
  console.log('Server is running...')
})