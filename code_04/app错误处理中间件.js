// const express = require('express')
// const app = express()
// // 应用级别中间件 对所有的路由都有效果
// const mw = (req, res, next) => {
//     console.log('应用级别中间件');
//     next()
// }
// app.use(mw)
// const userRouter = require('./router/user')
// const articleRouter = require('./router/article')
// app.use('/user', userRouter)
// app.use('/article', articleRouter)
// app.listen(3000, () => console.log('服务器开启成功'))

// 1. 一个应用(app)下面可以有多个路由模块
// 2. 应用级别中间件(app.use(中间件))对所有的路由规则全部有效果
// 3. 路由级别中间件(router.use(中间件))只会对当前这个路由模块有效果


const express = require('express')

const app = express()
app.get('/a', (req, res) => {
    throw new Error('出错了')
})
app.get('/b', (req, res) => {
    throw new Error('出错了')
})
// 这个中间件是唯一的一个必须放在所有的路由后面的，其他中间件必须放路由前面
// 唯一一个参数是有4个的
// 错误处理中间件 兜底
// 如果没有它，每个路由为了保证代码健壮都要写一个try...catch捕获异常 
app.use((err, req, res, next) => {
    res.send(err.message)
})
app.listen(3000, () => console.log('服务器运行成功'))