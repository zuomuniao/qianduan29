const express = require('express') //引入express
const app = express() //express本身是一个函数，express服务实例
// 静态资源托管：约定把public专门用来放静态资源，只要放进去就可以直接访问
//设置了把./public目录变成静态资源托管
// app.use(express.static('./public'))
// 虚拟前缀 网络路径必须是/开头
app.use('/public', express.static('./public'))
// 演示一下查询参数
// 网络路径必须以/开头的
app.get('/abc', (req, res) => {
  console.log(req.query) //可以自动获取url的？号后面的查询参数 自动转换成对象
  res.send('ok')
})
// 演示一下路径参数
// /bcd/:id 类似正则 可以匹配 /bcd/1 /bcd/2
app.get('/bcd/:id', (req, res) => {
  console.log(req.params)
  res.send('ok')
})
app.listen(3000,() => console.log('服务器开启成功'))

// url参数
// url?key=value&key=value
// http://baidu.com/list?id=100
// http://baidu.com/list/100

//baidu.com/list?username=zs&age=20 查询参数 查询 ? query
//baidu.com/list/zs/10 参数是路径的一部分 路径参数（参数是属于路径url一部分） 动态参数
