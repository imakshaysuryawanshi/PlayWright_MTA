let arr = [1, 3, 4, 5];
console.log(arr);

//Add to End -> push()
arr.push(7);
console.log(arr);

//Remove from End -> pop()
arr.pop();
console.log(arr);

console.log("----------------------------");

arr.push(8, 10);
console.log(arr);

console.log("----------------------------");

//Add to Begining -> unshift()
arr.unshift(0);
console.log(arr);

//Remove from Begining -> shift()
arr.shift()
console.log(arr);

console.log("----------------------------");

arr.pop();
arr.shift();
console.log(arr);

console.log("----------------------------");

console.log(arr);
arr.unshift(100);
console.log(arr);
arr.shift();
console.log(arr);