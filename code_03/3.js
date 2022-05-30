// // 1. 自定义模块的js后缀可以不写
// // 2. 自定义模块必须加./
// // 3. 只有内置模块和第三方模块不加
// // require('./xxx') -> 自定义
// // require('xxx') -> 内置或第三方 require('fs') require('moment')
// const add = require('./add')
// console.log(add(2, 3))

// require('./abc')

// // 1. js后缀可以不写
// // 2. 自定义模块必须加./ 内置或第三方不加./
// // 3. 如果引的是一个文件夹，里面文件名字是index.js也可以不写 require('./文件夹名字')
// // 4. 如果文件名不是Index.js也可以，但是需要在pakcage.json的main中指定
// // 5. 模块导入会有缓存 多次引入和引入一次没有区别 好处：防止同事引了一次我们也引入一次、
// 6. 如果我们引入一个第三方模块，但是在当前项目根目录node_modules中没有，不会直接报错，会去项目的父级看父级有没有node_modules里面有没这个包，直到磁盘根目录 （类似作用域链）

// require('./abc')
// require('./abc')
// require('./abc')

// const add = require('./add')
// console.log(add(2, 3))

// require('./abc')
// require('./abc')
// require('./abc')
