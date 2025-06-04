let name = "Akash";
let lastname = "Sharma";

console.log(name + " " + lastname); // Concatenation using +
console.log(`${name} ${lastname}`); // Concatenation using template literals

console.log(name.length);// Length of the string
console.log(name.charAt(2));// Character at a specific index
console.log(name.toUpperCase()); // Convert to uppercase
console.log(name.indexOf("a"));// Find index of a substring



let slc = name.slice(0, 2);// Extract a substring from the string
console.log(slc);

let lan = "   JavaScript ";
console.log(lan.trim());// Remove whitespace from both ends of a string

let url = "http://www.google.com";
console.log(url.replace("http", "https"));// Replace part of a string
console.log(url.includes("google"));// Check if a substring exists

let str = "Hello, World!";
console.log(str.split(',')); // Split a string into an array


