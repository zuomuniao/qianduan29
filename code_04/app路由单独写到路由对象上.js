// nodemon app
const express = require('express')
const app = express()
// app.use(express.static('./public'))
// ========路由代码开始 ===========
// 第一步、创建一个路由对象
const router = express.Router()
// 第二步、挂载路由
router.get('/abc', (req, res) => {
  res.send('访问的是/abc')
})
router.get('/bcd', (req, res) => {
  res.send('访问的是/bcd')
})
// 第三步、让app和路由对象产生关系
app.use(router)
// =======路由代码结束============
app.listen(3000, () => console.log('服务器开启成功'))
