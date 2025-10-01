const numbers = [2, 4, 6, 8]

console.log(numbers);

//if I want to grab 6
console.log(numbers[2]);

// iterate over the array
// length = total items in the array
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

for (const number of numbers) {
    console.log(number);
}

console.log('who do we appreciate?!')

