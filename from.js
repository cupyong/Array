'use strict';

// 将类数组对象（arguments）转换成数组
(function () {
    var args = Array.from(arguments);
    console.log(args)
    return args;
})(1, 2, 3);                            // [1, 2, 3]

// 将可迭代对象（Set 对象）转换成数组
Array.from(new Set(["foo", global]));       // ["foo", global]

// Map 对象也可以
var m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m);                          // [[1, 2], [2, 4], [4, 8]]  
console.log(Array.from(m))

// 字符串对象既是类数组又是可迭代对象
Array.from("foo");                      // ["f", "o", "o"]
console.log(Array.from("foo"))
// 使用 map 函数转换数组元素
Array.from([1, 2, 3], x => x + x);      // [2, 4, 6]

// 生成一个数字序列
var array5 =Array.from({length:5}, (v, k) => k);    // [0, 1, 2, 3, 4]
console.log(array5)