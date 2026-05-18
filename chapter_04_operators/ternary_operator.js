let age = 26;
//let goa_On = age > 18 ? 'yes' : 'No';
//console.log(goa_On);
// Ternary = condition ? "true resul" : "false result";

let goa_On = age > 18 ? (age >= 26 ? "Drinks on" : "No Drinks") : "No Goa";
console.log(goa_On);

//--------------------------------------------------------------------
//Maximum number between two numbers, okay, by using the ternary operator 

let a = 110;
let b = 20;

let max_Num = a > b ? (b > a ? `b ${b} is greater Number` : `a ${a} is Greater Number`) : `b ${b} is greater Number`;
console.log(max_Num);

//maximum between the three numbers also by using turnery over
let c = 15; d = 40; e = 15;
/* 
let max_No = c > e ? (d > c ? `d ${d} is greater Number` : `c ${c} is greater Number`)
    : `e ${e} is greater Number`;*/

//for same numbers
let max_No1 = c >= e ? (d > c ? `d ${d} is greater Number` : `c ${c} is greater Number`)
    : `e ${e} is greater Number`;
console.log(max_No);

// Solution:
let x = 5;
console.log(x++ + ++x - --x + x-- + ++x);
//(5 -> 6) + (6 -> 7) - (6 -> 6) + (6 -> 5) + (6 -> 7)
// SUM: (5) + (7) - (6) + (6) + (6) = 18;
console.log(x);