import add from './add.js' //esm es6模块化规范必须带扩展名
console.log(add(2, 3))
console.log(this)
const a = 100
// 按需导入
// import { a, fn } from './cal.js'
// console.log(a)
// fn()

// 必须先默认再按需
//因为有时候我们导入二个模块，可能这二个模块中的变量名一样的 冲突了
// 只有a1，没有a
// select count(*) as total from users
// a1就是别名
// import cal, { a as a1 } from './cal.js'
// console.log(cal)
// console.log(a1)

// 按需导入两个注意事项

// var obj = {
//     a:1
// }
// var a1 = obj.a

// obj可以拿到所有的模块导出的东西（包括按需和默认）
// import * as obj from './cal.js'
// console.log(obj)

// 直接导入 要引入的模块没有东西要导出 我们引入的目的就是执行一下这个文件
import './ceshi.js'

// 导入
// 1. 默认导入
// import cal from './cal.js'
// 2. 按需导入
// import {a,b} from './cal.js'
// 3. 直接导入
// import '路径'
// 导出
// 1. 默认导出 export default 表达式
// 2. 按需导出 export 语句

// 同时导入默认和按需
// import cal, { a as a1 } from './cal.js'

// 全部导出
// import * as obj from './cal.js'

// esm es6模块化是严格模式 this -> undefined
