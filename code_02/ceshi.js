// 执行的是ceshi.js 
// 1. 因为ceshi.js导入了cal.js所以，我们执行ceshi.js就
// 相当于同时执行2个模块 
// 2. ceshi.js称为主文件 入口模块 
// 每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。
// Node使用CommonJS模块规范，内置的require命令用于加载模块文件。
// 这块有两个模块 一个是ceshi.js 一个是cal.js
const cal = require('./cal.js')
console.log(cal.a)
cal.fn()
