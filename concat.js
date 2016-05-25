//例子1:连接两个数组
var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];

// 组成新数组 ["a", "b", "c", 1, 2, 3]; 原数组 alpha 和 numeric 未被修改
var alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric)

//例子2: 连接三个数组
var num1 = [1, 2, 3];
var num2 = [4, 5, 6];
var num3 = [7, 8, 9];

// 组成新数组[1, 2, 3, 4, 5, 6, 7, 8, 9]; 原数组 num1, num2, num3 未被修改
var nums = num1.concat(num2, num3);
console.log(nums)

//例子3: 将非数组值合并到数组里
var alpha = ['a', 'b', 'c'];

// 组成新数组 ["a", "b", "c", 1, 2, 3], 原alpha数组未被修改
var alphaNumeric = alpha.concat(1, [2, 3]);
console.log(alphaNumeric)