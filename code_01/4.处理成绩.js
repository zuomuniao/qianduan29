const fs = require('fs')
fs.readFile('./file/成绩.txt', 'utf-8', (err, data) => {
    if (err) return console.log('读取失败' + err.message);
    //g 正则修饰符 全局替换
    const res = data.replace(/ /g, '\n').replace(/=/g, ':')
    fs.writeFile('./file/成绩_ok.txt', res, (err) => {
        if (err) return console.log('写入失败' + err.message);
        console.log('写入成功');
    })
})

// 思路二：先把'小红=99 小白=100 小黄=70 小黑=66 小绿=88' 用' '来split得到一个数组，然后forEach，在里面
// replace('=',':') 最后再join('\n')