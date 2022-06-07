import fs from 'fs'
function readFile(str) {
  return new Promise(function (resolve, reject) {
    fs.readFile(str, function (err, data) {
      if (err) return reject(err)
      resolve(data.toString())
    })
  })
}
readFile('./file/1.txt')
  .then(function (res) {
    console.log(res)
    return readFile('./file/2.txt')
  })
  .then(function (res) {
    console.log(res)
  })
