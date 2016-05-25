// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype); 

// 下面的函数调用都返回 false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });


var array = [2, 5, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
console.log(array.indexOf(9, 3));  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0

var myFish = ["angel", "clown", "mandarin", "surgeon"];

console.log("myFish before: " + myFish);

var popped = myFish.pop();

console.log("myFish after: " + myFish);
console.log("Removed this element: " + popped);


var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('调用 shift 之前: ' + myFish);
// "调用 shift 之前: angel,clown,mandarin,surgeon"

var shifted = myFish.shift(); 

console.log('调用 shift 之后: ' + myFish); 
// "调用 shift 之后: clown,mandarin,surgeon" 

console.log('被删除的元素: ' + shifted); 
// "被删除的元素: angel"


var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var myVar = monthNames.toString();
console.log(myVar)