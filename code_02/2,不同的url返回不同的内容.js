const http = require('http')
const server = http.createServer()
// 请求事件 只要有一个客户端连上来就会触发
server.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  // 根据地址栏输入不同的url地址，返回不同的内容
  if (req.url === '/index.html' || req.url === '/') {
    res.end('首页')
  } else if (req.url === '/about.html') {
    res.end('关于我们')
  } else {
    res.end('404 页面找不到')
  }
})
server.listen(3000, () => {
  console.log('服务器开启成功')
})
// res.end ---> 把内容发送到客户端
// console.log -> 把内容打印到终端
// 单线程
// 约定 ： 规定好所有的东西放在一个统一的位置
