let scores = [45, 82, 91, 60, 30];
// map - transform every element, return a new arrays
// A map will always return the same number of elements that you have, 
// but based on the condition, their values will be changed. 

let grade = scores.map(s => s < 50 ? 'fail' : 'pass')
console.log(grade);

console.log("----------------------------");

// filter — keeps elements that pass a test
let result = scores.filter(s => s < 50);
console.log(result);

console.log("----------------------------");

// reduce — accumulates to a single value
//array.reduce((accumulator, currentValue) => logic, initialValue)
let total = scores.reduce((a, b) => a + b, 0)
console.log(total);

console.log("----------------------------");

// flat() — flattens nested arrays
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());
console.log("----------------------------");

// find()
/*It returns the FIRST matching element in an array
👉 If nothing matches → returns undefined8*/
let result1 = scores.find(n => n > 20);
console.log(result1);

/*
| Method     | Purpose             |
| ---------- | ------------------- |
|  map()     | transform items     |
|  filter()  | keep matching items |
|  find()    | first match         |
|  reduce()  | combine into one    |
*/