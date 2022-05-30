// nodemon app
const express = require('express')
const app = express()
// app.use(express.static('./public'))
// ========路由代码开始 ===========
const userRouter = require('./router/user')
const articleRouter = require('./router/article')
app.use('/user', userRouter)
app.use('/article', articleRouter)
// =======路由代码结束============
app.listen(3000, () => console.log('服务器开启成功'))

// function fn() {
//   var a = 1
//   console.log(a)
// }

// function fn1() {
//   var a = 2
//   console.log(a)
// }
