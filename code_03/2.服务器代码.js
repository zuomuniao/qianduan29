const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer()
// 静态资源托管
// 静态资源：不会变的，css,jpg,fonts,js,html
server.on('request', (req, res) => {
  //   //   res.setHeader('a', 'heima')
  //   res.setHeader('Content-Type', 'text/html;charset=utf-8') //http协议 请求报文（请求行 请求头 请求体） 响应报文
  //   res.end('响应体数据') //响应体
  fs.readFile(path.join(__dirname, 'public', req.url), (err, data) => {
    if (err) return res.end('404 not found')
    res.end(data)
  })
})
server.listen(3000, () => console.log('服务器开启成功'))
// localhost 127.0.0.1

// npm,yarn,pnpm 做好失败好几次的准备
// 多来几次 开热点 150m
// 多百度 到底是网不好 还是其他各种问题

// 一个新项目
// 第一步、初始化 npm init -y
// 第二步、下包

// npm init -y
// npm i 包名 包名
// npm uni 包名
