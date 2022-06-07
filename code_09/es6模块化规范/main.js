// 1. commonjs规范
// 2. esm规范
// 入口文件
// console.log(this) //esm 严格模式
import add from './add.js'
console.log(add(2, 3))
// import {add as add1,substract} from './cal.js'
// import * as obj from './cal.js'
import './ceshi.js'
