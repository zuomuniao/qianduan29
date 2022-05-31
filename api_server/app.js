const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))//接收post数据中间件 处理好数据放在req.body
// 图书  添加图书
// 由于我们现在还没有学数据库,所以数据只能是模拟
const list = [
    { "id": 1, "bookname": "西游记", "author": "吴承恩", "publisher": "北京图书出版社" },
    { "id": 2, "bookname": "红楼梦", "author": "曹雪芹", "publisher": "上海图书出版社" },
    { "id": 3, "bookname": "三国演义", "author": "罗贯中", "publisher": "北京图书出版社" }
]

list.forEach(item => console.log(item))

// npm i cors  第三方中间件
const cors = require('cors')
app.use(cors())

// app.use((req, res, next) => {
//     // 光写这一行，只能让最普通的get,post没有自定义头信息的请求才允许跨域
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     // 如果有自定义头信息，还要加一行
//     res.setHeader('Access-Control-Allow-Headers', '*')
//     // 如果想让其他方法也可以跨域
//     res.setHeader('Access-Control-Allow-Methods', '*')
//     next()
// })

// get 获取post新增 put修改 delete 删除 四大methods 
app.put('/api/getbooks', (req, res) => {
    res.send('ok')
})

// 获取图书列表
app.get('/api/getbooks', (req, res) => {
    // 规范的接口就要这样写 返回一个对象 status告诉用户有没有出错 
    res.send({
        status: 0,//约定0代表成功 1代表失败  200 成功 
        message: '成功',
        data: list
    })
})

//添加图书
app.post('/api/addbook', (req, res) => {
    req.body.id = list.length + 1
    list.push(req.body)
    res.send({
        status: 0,
        message: '添加成功'
    })
})

//删除图书 
app.get('/api/delbook', (req, res) => {
    const id = req.query.id - 0 //地址栏拿到的数据是字符串
    //根据id找索引
    // const index = list.findIndex(item => item.id === id)
    const index = list.findIndex(item => item.id === id)
    // 根据索引删除这一项
    list.splice(index, 1)
    res.send({
        status: 0,
        message: '删除成功'
    })
})





//模拟jsonp接口
app.get('/api/jsonp', (req, res) => {
    // 对象不能直接和字符串进行拼接，因为会导致对象隐式转换成字符串，调用toString()
    // [object Object]
    //obj是对象 json对象 json字符串
    var obj = { "name": "zs" }
    var fnName = req.query.callback
    var str = fnName + '(' + JSON.stringify(obj) + ')';
    res.send(str)
})
app.listen(3000, () => console.log('接口服务器开启成功'))