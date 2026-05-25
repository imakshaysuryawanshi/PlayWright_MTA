let i = 0;
do { // atleast run once
    console.log(i);
    i++;
} while (i < 0);

let retry = 0;
do {
    console.log("Execute a code!");
    console.log("Retrying.....", retry);
    retry++;
} while (retry < 3);