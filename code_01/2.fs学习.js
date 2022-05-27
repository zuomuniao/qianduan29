// fs -> file system 文件系统 这个内置模块可以操作文件  对文件的读取内容 写入内容 删除
//读和写

// 需求：通过node.js把1.txt的内容读取并打印出来
const fs = require('fs')
// fs.readFile(要读取的文件的路径(相对路径),编码设置,回调函数)
// 如果读取成功了 err -> null 空对象 data就是1111 
// 如果读取失败了 err -> 错误对象 data就是空 
fs.readFile('./file/1.txt', 'utf-8', (err, data) => {
    if (err) return console.log('读取失败' + err.message);
    console.log(data);
})

