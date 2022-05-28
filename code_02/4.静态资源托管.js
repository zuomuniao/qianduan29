const http = require('http')
const path = require('path')
const fs = require('fs')
const server = http.createServer()
// 约定：用户在地址栏必须写成和路径一一对应
server.on('request', (req, res) => {
  //   编码不写：因为我们现在引的是具体的文件，比如html中就有编码，其他类型文件编码不重要
  //   文件读写
  fs.readFile(path.join(__dirname, 'public', req.url), (err, data) => {
    if (err) return res.end('404 not found')
    res.end(data)
  })
})
server.listen(3000, () => {
  console.log('服务器开启成功')
})
