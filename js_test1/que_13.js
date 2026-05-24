function checkJsBasicsReadinessGate(hasSetup, hasPractice, hasNotes) {
    // write your code here
    if (hasSetup && hasPractice && hasNotes) {
        return "READY";
    } else {
        return "BLOCKED";
    }
}

console.log(checkJsBasicsReadinessGate(true, true, true));
console.log(checkJsBasicsReadinessGate(true, false, true));