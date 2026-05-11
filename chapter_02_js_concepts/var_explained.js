var a = 10; //Global scope
//console.log(a);

function printHello() {
    console.log("Hello from function");
    var a = 20; //Local scope
    console.log(a);
    if (true) {
        var a = 30; //var is function scoped, so it will override the 
        // previous 'a' in the same function scope
        console.log(a);
    }
    //console.log(a); //This will print 30 because 'a' is function scoped 
    // and the last assignment was 30

}
printHello(); // it will pring a= 30 - local scoped.

function printHello1() {
    console.log("Hello TheTestingAcademy!");
    var a = 20; // Local Scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a); // 30
    }

}

printHello1();