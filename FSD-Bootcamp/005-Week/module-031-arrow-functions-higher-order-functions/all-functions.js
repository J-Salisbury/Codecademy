//Normal function definition
function isNumberZero(number) {
    return number === 0;
}

//shortest syntax

(number) => number === 0;


//Arrays
let myArray = [1, 2, 3, 0];
console.log(myArray.find(isNumberZero));

myArray.find(element => element === 0);
myArray.find((element) => element === 0);
myArray.find((element) => { return element === 0 });
myArray.find(function (element) { return element === 0 });