// if ("hello") console.log("String is truthy"); // // "hello" = truthy
// if (42) console.log("Number is truthy");
// if ({}) console.log("Empty object is truthy!");
// if ([]) console.log("Empty array is truthy!");

// if ("") console.log("Won't print");
// if (null) console.log("Won't print");
// if (undefined) console.log("Won't print");
// if (NaN) console.log("Won't print");
// if (0) console.log("Won't print");

// ANY NUMBER = 1,2,,3,34,32,2,- TRUTH
// 0= FALSE

let name = 0;
if (name) {
    console.log("Hi");
} else {
    console.log("Bye");
}

let num = 7;

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}

let marks = 85;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: Fail");
}


// Leap Year Check

Rules:

// Divisible by 4 AND not divisible by 100 → Leap year
// OR divisible by 400 → Leap year
// Else → Not a leap year

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is NOT a Leap Year");
}