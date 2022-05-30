const fs = require('fs')
const path = require('path')
// 读写文件是异步 类似ajax 网有点慢
fs.readFile(path.join(__dirname, './file/1.txt'), 'utf-8', (err, data) => {
  if (err) return console.log(err.message)
  console.log(data)
})
// console.log(123)
fs.writeFile(path.join(__dirname, './file/2.txt'), '22222', (err) => {
  if (err) return console.log(err.message)
  console.log('写入成功')
})

// 客户端 服务器
// ip 域名 dns
// 端口号 唯一的值 只能用一次 占住 3000 3007 8080 8081 9527 9528
// 一眼就知道了是在开发的模式下 80 443 放到服务器
