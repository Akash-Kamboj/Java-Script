const age = 25;
let rollno = "1001";
var city = "New York";

let gender;

// This will cause an error because 'age' is a constant
// age  = 30;

rollno = "1002";
city = "Los Angeles";

console.table([{ age }, { rollno }, { city }, { gender }]);

