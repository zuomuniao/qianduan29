const fs = require('fs')
const path = require('path')
// path.join为什么要这样写?
// C:\Users\ericzheng\Desktop\code_01\file\1.txt
// 1. 相对路径容易出问题 下一站  说具体站名 
fs.readFile(path.join(__dirname, './index.html'), 'utf-8', (err, data) => {
    if (err) return console.log(err.message);
    // \s 空格 \d 数字 
    // *(>=0) +(>=1) ?(0或1) 量词 多少个
    // g 全局替换 i 忽略大小写
    const regCss = /<style>([\s\S]*)<\/style>/
    const arrCss = regCss.exec(data)
    writeFn(path.join(__dirname, './clock/index.css'), arrCss[1])

    const regJs = /<script>([\s\S]*)<\/script>/
    const arrJs = regJs.exec(data)
    writeFn(path.join(__dirname, './clock/index.js'), arrJs[1])


    //处理html
    const html = data
        .replace(arrCss[0], '<link rel="stylesheet" href="./index.css">')
        .replace(arrJs[0], '<script src="./index.js"></script>')

    writeFn(path.join(__dirname, './clock/index.html'), html)
})

/**
 * 
 * @param {要写入的文件路径} src 
 * @param {要写入的数据} str 
 * 
 */
function writeFn (src, str) {
    fs.writeFile(src, str, (err) => {
        if (err) return console.log('写入失败');
        console.log('写入成功');
    })
}