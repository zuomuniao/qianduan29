const express = require('express')
const router = express.Router()
router.get('/list', (req, res) => {
  res.send('文章列表')
})
router.get('/detail', (req, res) => {
  res.send('文章详情')
})
module.exports = router

// 一个文件就是一个模块，模块有自己的作用域，在模块中定义的变量是局部的
