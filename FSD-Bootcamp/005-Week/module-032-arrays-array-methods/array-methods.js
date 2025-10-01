const fruits = ["banana", "kiwi", "cherry", "apple", "strawberry"];
console.log(fruits);

console.log(fruits.push("grapes"));
console.log(fruits.pop());

console.log(fruits);

fruits.unshift("grapes");
console.log(fruits);

fruits.shift();
console.log(fruits);

//find, includes, map, filter, reduce, some, every, splice, slice

//filter
function moreThanSixCharacters(str) {
  if (str.length > 6) {
    return true;
  }
  return false;

  //short method: return str.length > 6;
}

console.log(fruits.filter(moreThanSixCharacters));

// arrow functions

console.log(fruits.filter((str) => str.length > 6));

function kindaFilter(arr) {
  let newArray = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index].length > 6) {
      newArray.push(arr[index]);
    }
  }
  return newArray;
}

console.log(kindaFilter(fruits));


// reviewing const and the fact that arrays can be mutated
const name = 'Jessica';

//name.push('s');

const newName = ['J', 'E', 'S', 'S'];
newName.push('I', 'C', 'A');

console.log(newName);


// map, reduce
console.log(fruits.map(x => x + "!"));

//reduce

// total from all of the items in a number array
// completely change the structure of each item in an array
    // object etc.

