// // Array.observe(arr, callback)
// arr
// 用于被监视的数组
// callback
// 每当数组发生变化时，使用如下参数调用该函数：
// changes
// 用于表示变化的对象数组。每个变化对象的属性如下：
// name: 变化的属性名。
// object: 变化后的数组。
// type: 用于表示变化类型的字符串。其取值为"add"、"update"、"delete"或 "splice"之一。
// oldValue: 仅用于"update"和"delete"类型。变化之前的取值。
// index: 仅用于"splice"类型。变化发生所在索引。
// removed: 仅用于"splice"类型。被删除元素组成的数组。
// addedCount: 仅用于"splice"类型。被添加的元素数量。

'use strict';
    

var arr = ['a', 'b', 'c'];

Array.observe(arr, function(changes) {
  console.log(arr);
  console.log(changes);
});

arr[1] = 'B';
// [{type: 'update', object: <arr>, name: '1', oldValue: 'b'}]

arr[3] = 'd';
// [{type: 'splice', object: <arr>, index: 3, removed: [], addedCount: 1}]

arr.splice(1, 2, 'beta', 'gamma', 'delta');
// [{type: 'splice', object: <arr>, index: 1, removed: ['B', 'c', 'd'], addedCount: 3}]