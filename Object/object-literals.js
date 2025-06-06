let mySym = Symbol("Key1");

let myinfo = {
    name: "Akash",
    "full name": "Akash Kumar",
    [mySym]: "Symbol Value",// Using symbol as a key
    age: 20,
    isStudent: true,
    course : "MCA"
}
console.log(myinfo["full name"]); // Accessing property with space in name
console.log(myinfo.name); // Accessing property without space in name
console.log(myinfo[mySym]); // Accessing symbol property

myinfo.name = "Akash Deep";
console.log(myinfo.name); 

Object.freeze(myinfo); // Freezing the object to prevent modifications

myinfo.age = 40;
console.log(myinfo.age); // Will still show 20 because the object is frozen

console.log(myinfo); // Display the entire object