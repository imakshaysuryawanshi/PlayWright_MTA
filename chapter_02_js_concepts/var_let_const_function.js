var v = 10;
let l = 20;
const c = 1.14;
console.log(v);
console.log(l);
console.log(c);

var browser = "chrome";
var browser = "firefox"; //Redclaration of var is allowed
browser = "edge"; //reassignment of var is allowed

var testCase = ["login", "signup", "logout"];

for (var i = 0; i < testCase.length; i++) {
    console.log("Running Test:", testCase[i]);
}
console.log("Leakge outside:", i); //var is function scoped, so it is accessible outside the loop

//Function
console.log("Hi");
console.log("Hi");
console.log("Hi");

// The same were repetitive console writing reuse function so we can use it repetitive.
function say() {
    console.log("Hi from function");
}

say();
say();
say();
/*-------------------------------------------------------------------*/

// 1. Define of function
function greet() {
    console.log("Hi, How are you?");
}

// 2. Calling of the function
greet();
greet();
greet();
greet();
greet();
greet();
greet();