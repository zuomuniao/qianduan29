import fs from 'fs'
function readFile(str) {
  return new Promise(function (resolve, reject) {
    fs.readFile(str, function (err, data) {
      if (err) return reject(err)
      resolve(data.toString())
    })
  })
}
// Promise.all([p1,p2,p3...]).then  必须等最慢的返回结果才会执行后面then 聚餐
Promise.all([readFile('./file/1.txt'), readFile('./file/2.txt')]).then(
  function (res) {
    console.log(res)
  }
)
// Promise.race([p1,p2,p3...]).then 只需要最快回来就行了,其他的promise废弃 一堆人通知高考成绩
Promise.race([readFile('./file/1.txt'), readFile('./file/2.txt')]).then(
  function (res) {
    console.log(res)
  }
)
