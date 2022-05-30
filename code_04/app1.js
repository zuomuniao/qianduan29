const express = require('express') //引入express
const app = express() //express本身是一个函数，express服务实例
// 注意 只能匹配到  http://127.0.0.1:3000/abc
// 路由代码 只能匹配请求方式是get 并且url是/abc
app.get('/abc', (req, res) => {
  // res.send(字符串 对象)
  //   如果send接收的参数是数字，它会认为是状态码
  //   res.send(200)
  //   当我们res.send接收的是字符串的时候，会自动给我们发送响应头 Content-Type: text/html; charset=utf-8

  //   res.send('<h1>测试</h1>')
  //当我们res.send接收是对象的时候，它就会自动发响应头 Content-Type: application/json; charset=utf-8
  res.send({ name: 'zs', age: 20 })
})
// app.post('/abc', (req, res) => {
//   res.send('hello1')
// })
// app.get('/', (req, res) => {
//   res.send('首页')
// })
app.listen(3000, () => console.log('服务器开启成功'))
