let fruits = ['apple', 'banana', 'cherry', 'date'];
console.log(fruits);

fruits.push(1);// Adding a number to the array
console.log(fruits);

fruits.pop();// Removing the last element
console.log(fruits);

fruits.unshift('kiwi');// Adding an element to the beginning
console.log(fruits);

fruits.shift();// Removing the first element
console.log(fruits);

console.log(fruits.includes('banana'));// Checking if 'banana' is in the array

let arr = fruits.join();// Joining the array into a string
console.log(typeof(arr));


console.log(fruits);

let arr2 = fruits.slice(1, 3);// Slicing the array from index 1 to 3
console.log(arr2);

// let arr3 = fruits.splice(1, 3);// Splicing the array from index 1 to 3
// console.log(arr3);

console.log(fruits);

let veg = ['carrot', 'broccoli', 'spinach'];
let anim = ['dog', 'cat', 'fish'];

console.log(veg.concat(anim));// Concatenating two arrays

let spread = [...veg, ...anim];// Using spread operator to concatenate
console.log(spread);

let arrof = (Array.of(veg, anim));// Creating an array from the arguments
console.log(arrof);

console.log(Array.from("Akash"));// Converting a string to an array
