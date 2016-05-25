Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]


// Array.of() 和 Array 构造函数不同的是：在处理数值类型的参数时，Array.of(42) 创建的数组只有一个元素，即 42, 但 Array(42) 创建了42个元素，每个元素都是undefined。

//if (!Array.of) {
//   Array.of = function() {
//     return Array.prototype.slice.call(arguments);
//   };
// }