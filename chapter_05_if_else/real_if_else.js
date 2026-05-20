// let age = 18;

// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }

// app.vwo.com -> viewer, editor or admin -> 


let isLoggedIn = true;
let userRole = "XYZ";

if (isLoggedIn) {

    if (userRole === "admin") {
        console.log("admin can do all the things");
    }
    else if (userRole === "editor") {
        console.log("Welcome Editor — Edit access granted.");
    } else if (userRole === "viewer") {
        console.log("Welcome Viewer — Read-only access.");
    } else {
        console.log("No idea you may be a guest! role");
    }

} else {
    console.log("You are not logged in!!");
}


//API
let statusCode = 200;

if (statusCode === 200) {
    console.log("API are working fine!")
} else if (statusCode === 404) {
    console.log("API not found!")
} else {
    console.log("Not status code match!")
}


let username = "Dev";
let password = "secure123";
let isAccountLocked = true;

// Logical operator + if-else statement

if ((username === "Dev" && password === "secure123") && isAccountLocked) {
    console.log("Allowed to enter");
} else {
    console.log("not allwed to enter");
}