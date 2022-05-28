let a = 100
function fn() {
  console.log(123)
}

// module.exports.a = a
// module.exports.fn = fn

module.exports.a = a
exports.fn = fn

// exports = {
//   a,
//   fn,
// }

// 张小明 -> 小张
// 有一天 公司来了一个更加年轻姓张的

// document,localStorage -> 内置

// function fn(){} -> 用户自定义

// $,echarts,swiper,layui -> 第三方
