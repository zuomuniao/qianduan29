// 需求：把222写到file/2.txt中
const fs = require('fs')
// fs.writeFile(要写入哪个文件路径(这个文件可以没有，没有node会自动帮你创建，但是node只能创建文件不能创建文件夹),要写入的数据,回调函数)

// 写入成功了 err是null null->false 
// 写入失败了 err是error错误对象
fs.writeFile('./file/2.txt', '222', (err) => {
    if (err) return console.log('写入失败' + err.message);
    console.log('写入成功');
})