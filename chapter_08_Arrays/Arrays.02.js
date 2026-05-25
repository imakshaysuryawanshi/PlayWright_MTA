// Creating Arrays// Array literal (preferred)
let browsers = ["Chrome", "Firefox", "Safari"];

// Array constructor
let score = new Array(3);
score[1] = [9];
score[0] = [1];
score[2] = [2];
//score[3] = [5];
console.log(score[0]);

console.log("----------------------------");

let score1 = new Array(2, 9, 0, 8);
console.log(score1);
let numbers = new Array(100, 200, 300, 400);//0-3: 4
console.log(numbers);

console.log("----------------------------");

//Array.of()
let test = Array.of(70, 65, 40, 89, 99);
console.log(test);

console.log("----------------------------");
// Array.from() creates a new array from an array-like or 
// iterable object (e.g., string, NodeList, arguments).

let char = Array.from("Hello Word");
console.log(char);

let numbers1 = Array.from("123456789");
console.log(numbers1);




