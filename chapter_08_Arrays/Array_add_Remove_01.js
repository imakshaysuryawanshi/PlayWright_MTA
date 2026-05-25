let arr = [1, 3, 5];
console.log(arr);

//splice(start, deleteCount, itemToAdd)
// start → where to begin
// deleteCount → how many items to remove
// itemToAdd → insert this item there

arr.splice(0, 1, 4);
console.log(arr);
console.log("----------------------------");
arr.splice(1, 1, 7);
console.log(arr);

console.log("----------------------------");

arr.splice(2, 2, 10, 11);
console.log(arr);