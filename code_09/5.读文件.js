import fs from 'fs'
fs.readFile('./file/1.txt', function (err, data) {
  if (err) return console.log(err.message)
  console.log(data.toString())
  fs.readFile('./file/2.txt', function (err, data) {
    if (err) return console.log(err.message)
    console.log(data.toString())
    fs.readFile('./file/2.txt', function (err, data) {
      if (err) return console.log(err.message)
      console.log(data.toString())
      fs.readFile('./file/2.txt', function (err, data) {
        if (err) return console.log(err.message)
        console.log(data.toString())
        fs.readFile('./file/2.txt', function (err, data) {
          if (err) return console.log(err.message)
          console.log(data.toString())
        })
      })
    })
  })
})
