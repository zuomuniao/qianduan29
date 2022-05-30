const express = require('express')
const router = express.Router()
router.get('/list', (req, res) => {
  res.send('用户列表')
})
router.get('/detail', (req, res) => {
  res.send('用户详情')
})
module.exports = router
