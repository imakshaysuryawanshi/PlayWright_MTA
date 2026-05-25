// Iterate - Go from one to another.
let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}
console.log("----------------------------");

// for...of (cleanest for values)
//for...of => value/item

for (test of tests) {
    console.log(test);
}

console.log("----------------------------");

tests.forEach((i, index) => {
    console.log(i, index);
});

console.log("----------------------------");

let students = ["methis", "senthil", "ajay", "rahul"];

//for..in => index/key
for (student in students) {
    console.log(student, " -> ", students[student]);
}

let person = {
    name: "Suraj",
    age: 27,
    city: "Pune"
};

for (key in person) {
    console.log(key, " -> ", person[key]);
}

console.log("----------------------------");


//entries() gives BOTH -> i: index & test: item
for (let [i, test] of tests.entries()) {
    console.log(i, test);
}