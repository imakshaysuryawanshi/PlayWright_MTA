// Assignment Operators
// -  = 
// - to assign the right hand side value to the left side.
// - let x = 10;
// - x = 30;

let x = 10;
x = 11;
x = 90;
console.log(x);

// Arithmetic Operators

let a = 10, b = 3;
console.log(a);
console.log(b);

let sum = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);

// % = Modulus
// a%b -> it will return the remainder


let result = 13 % 7;
console.log(result);


console.log(101 % 2);
console.log(100 % 2);
console.log(37 % 2);
console.log(36 % 2);

//  n%2 == 1 - odd number, [ n%2 == 0 , even]

//Exponential Operator
console.log(2 ** 3);
// 2^3

let x = 10;
let y = 3;
console.log(x ** y);

// Compund Operator -> IQ (Interview Que)

let x = 10;
x += 10; // x = x +10;
console.log(x);

x -= 3; //  x =x -3
console.log(x);

x *= 2; // x = x * 2;
console.log(x);

x /= 17;  // x = x/17;
console.log(x);

x %= 2;
console.log(x);


// Comparsion Op - true / false - boolean

// > , < , >= , <= , == , === , !, !=, !===

// = -> Assignment opearator
// == -> losse comparsion ( sikh vs hindu )
// === -> strict comparsion ( sikh vs hindu , languge, living)


console.log(3 > 4);
console.log(3 < 4);
console.log(4 >= 4); // 4 > 4 or 4===4 -> or gate -> 
console.log(3 <= 4); // 3<4 or 3===4

// 10 > 5      // true
//10 < 5      // false
// 10 >= 10    // true
// 10 <= 9     // false

// // number == string
// console.log(42 == "42"); // == -> loose compasion
// console.log(42 === "42"); //data type and converted value
// console.log(42 == "45"); //value different


// console.log(5 === 5);
// console.log(5 === "5");

// console.log(5 == 5);
// console.log(5 == "5");

// console.log(0 == ""); // ?  "" = conveted to 0 - checked by the loose
// console.log(0 === ""); 


console.log(true == 1);
console.log(false == 0);
console.log(true == "1");
console.log(true == 2);


console.log(5 != "5"); // false , 5 = int, "5" string, both of them are not equal? - lose couple
console.log(5 !== "5"); // true ( value, dataType)
//console.log(5 !=== "5"); This doesn't excit


// === Strict check we will check for both the datatype and value
// == Lose check we will check either value or data type.

console.log(0 == "");
console.log(0 == "0");
console.log("" == "0");  //  🤯 (transitivity broken!)


console.log(0 == false);
console.log(null == 0);
console.log(null == undefined);
console.log(null === undefined);

// Logical Operator
// && -> AND Gate
// || -> OR Gate

let a = true;
let b = false;
console.log(a && b); //  AND
console.log(a || b); //  OR
console.log(!a); // 

console.log(5 != "g");  // Value 5, g ! that true, 

// String Concatination Op
let s = "Hi";
s += " Dev";
console.log(s);

