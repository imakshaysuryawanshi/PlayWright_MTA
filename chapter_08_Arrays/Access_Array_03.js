// Accessing & Modifying
let status = ["Pass", "Fail", "Skip"];
console.log(status[0]);
console.log(status.at(-1));
console.log(status.at(-4));// undefined
// Negative index gives the rever values from index
// .at() is syntax

console.log("----------------------------");

// Modify
status[1] = "blocked";
console.log(status);