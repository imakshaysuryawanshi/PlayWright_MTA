function calculateJsBasicsWeightedScore(passed, failed, skipped) {
    // write your code here
    return (passed * 2) - (failed * 1);

}

console.log(calculateJsBasicsWeightedScore(4, 5, 1));