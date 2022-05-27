// // const fs = require('fs')
// // //fs.readFile第一个参数如果用的是相对路径，相对的是终端的执行的目录，而不是当前这个js文件所在的目录
// // // 为了避免出错，不要用相对路径
// // fs.readFile('C:\\Users\\ericzheng\\Desktop\\code_01\\file\\1.txt', 'utf-8', (err, data) => {
// //     if (err) return console.log(err.message);
// //     console.log(data);
// // })


// // console.log('C:\\Users\\ericzheng\\Desktop\\code_01\\file\\1.txt');
// //这个东西就可以得到当前这个js文件所在的目录的绝对路径
// // console.log(__dirname);
// const path = require('path')
// //参考就是当前js文件，而不是终端目录
// // 1. 绝对路径，就不会出现相对路径的错误
// // 2. 把代码发给同事，也不会报错
// // 文泽路
// console.log(path.join(__dirname, './file/1.txt'));

const path = require('path')
const fs = require('fs')
fs.readFile(path.join(__dirname, './file/1.txt'), 'utf-8', (err, data) => {
    if (err) return console.log('读取失败' + err.message);
    console.log(data);
})