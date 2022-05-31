const express = require('express')
const app = express()


app.get('/a', (req, res) => {
    res.send('ok1')
})
app.get('/b', (req, res) => {
    res.send('ok2')
})


// 请求 -> 中间件1 -> 中间件2 -> 路由 -> 响应 
let a = null;
// 手机
//创建中间件
const mw1 = (req, res, next) => {
    req.a = 100;
    a = req;
    console.log(456);
    next()
}
//使用中间件
app.use(mw1)

//创建中间件
const mw = (req, res, next) => {
    console.log(req.a);
    console.log(req === a);
    console.log(123);
    next()
}
//使用中间件
app.use(mw)
app.listen(3000, () => console.log('服务器运行成功'))