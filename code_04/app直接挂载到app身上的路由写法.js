// nodemon app
const express = require('express')
const app = express()
// app.use(express.static('./public'))
// ========路由代码开始 ===========
app.get('/abc', (req, res) => {
  res.send('访问了/abc路径')
})
app.get('/bcd', (req, res) => {
  res.send('访问了/bcd路径')
})
// =======路由代码结束============
app.listen(3000, () => console.log('服务器开启成功'))
