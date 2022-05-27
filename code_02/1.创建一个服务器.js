//导入http内置模块
const http = require('http')
//创建服务器实例对象
const server = http.createServer()
//绑定事件 事件名叫request 只要有客户端连上来就触发
// 请求 request -> req 
// 响应 response -> res 
server.on('request', (req, res) => {
    //客户端发请求，我们得响应一点东西
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('这是写自己的名字的服务器')
})
//设置当前这个服务对应的端口号指定 肯定不会和别人的冲突
// 3000 3001 3002 3003
// 8080 8081 8082 
// 9527 9528 
// 5500 5000

server.listen(3000, () => {
    console.log('服务器开启成功');
})