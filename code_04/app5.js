const express = require('express')
const app = express()
// 如果一个中间件对所有的路由全部有效，就是全局中间件
// 如果一个中间件只能某一个路由有效果，就是局部中间件
const mw = (req, res, next) => {
    console.log(123);
    next()
}
const mw1 = (req, res, next) => {
    console.log(456);
    next()
}
// app.use(mw)
// 一个的写法
// app.get('/a', mw, (req, res) => {
//     res.send('ok1')
// })

app.get('/a', [mw, mw1], (req, res) => {
    res.send('ok1')
})

app.get('/b', (req, res) => {
    res.send('ok2')
})
app.listen(3000, () => console.log('服务器运行成功'))