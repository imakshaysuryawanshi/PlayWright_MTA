let results = ["pass", "fail", "pass", "error", "fail"];

// indexOf() — returns first index, or -1 if not found

results.indexOf('fail');//1
results.indexOf('skip');//-1

// lastIndexOf() — searches from the end
results.lastIndexOf('fail');//4

// includes — returns boolean
let result = results.includes('skip')// false
console.log(result);
console.log("----------------------------");

// find — returns FIRST matching element
let res = results.find(item => item === 'fail');
console.log(res);

let num = [10, 25, 30, 45];
let r = num.find(x => x <= 25);
console.log(r);

console.log("----------------------------");

// findIndex
nums.findIndex(n => n > 20); // 1, 2, 3
nums.findLast(n => n > 20); // 45] 
nums.findLastIndex(n => n > 20);// 3



