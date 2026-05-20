/*Question 3 — Bug Severity Classifier
Problem: Given a bug's impact score (1–10), classify the severity.
9–10 → Critical (block release)
7–8 → High
4–6 → Medium
1–3 → Low
Anything else → Invalid score*/

let bugSev = 10;
if (bugSev >= 9) {
    console.log("Critical (block release)");
} else if (bugSev >= 7) {
    console.log('High');
} else if (bugSev >= 4) {
    console.log('Medium');
} else if (bugSev >= 1) {
    console.log('Low');
} else {
    console.log("Invalid score");
}