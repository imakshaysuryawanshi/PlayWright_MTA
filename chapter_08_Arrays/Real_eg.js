let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);
console.log(browser);

browser.pop();
console.log(browser);
console.log("----------------------------");
let remove = browser.shift();
console.log(browser);
console.log(remove);

console.log("----------------------------");

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === 'chrome') {
        console.log("Chrome is not Removed");
    } else {
        console.log("Chrome is Removed");
    }
}

console.log("----------------------------");

if (browser.includes('chrome')) {
    console.log("Chrome is not Removed");
} else {
    console.log("Chrome is Removed");
}