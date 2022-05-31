const express = require('express')
const router = express.Router()
// 路由级别中间件 只对当前这个路由模块下面的所有的路由有效果
const mw = (req, res, next) => {
  console.log('只对user路由才有效果');
  next()
}
router.use(mw)
router.get('/list', (req, res) => {
  res.send('用户列表')
})
router.get('/detail', (req, res) => {
  res.send('用户详情')
})
module.exports = router
