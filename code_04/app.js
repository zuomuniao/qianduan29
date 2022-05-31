const express = require('express')
const app = express()
// app.use(中间件)
// app.use(express.static('./public'))
// 专门用来接收post参数数据的中间件
app.use(express.urlencoded({ extended: false }))//这个中间件它把post数据接收之后，放在req.body中
// get的参数我们可以通过req.query,req.params接收
// post的参数我们如果想接收，必须用一个内置的中间件 
app.post('/ceshi', (req, res) => {
    console.log(req.body);
    res.send('ok')
})
app.listen(3000, () => console.log('服务器运行成功'))


// app.use(中间件)

// function static(){
//     return function(req,res,next){

//     }
// }


// 1. 应用级别
// 2. 路由级别
// 3. 错误处理中间件
// 4. 内置中间件
// 5. 第三方中间件