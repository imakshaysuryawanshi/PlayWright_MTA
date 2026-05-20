/*Question 5 — Login Lockout After Failed Attempts
Problem: Track failed login attempts. Lock the account after 3 failed attempts.*/

let attempt = 0;

if (attempt === 0) {
    console.log("Login successful");
} else if (attempt === 1) {
    console.log("2 attempt left before lockout");
} else if (attempt === 2) {
    console.log("1 attempt left before lockout");
} else if (attempt === 3) {
    console.log("🔒 Account Locked — Contact support");
} else {
    console.log("🔒 Account Locked — Contact support");
}