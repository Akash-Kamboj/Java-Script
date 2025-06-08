//Explicit return
let sum = (num1 , num2) => {
    return num1 + num2;
}
console.log(sum(10, 20)); 

let sum2 = (num1, num2) => num1 + num2; // Implicit return
console.log(sum2(30, 40));

let sum3 = (num1 , num2) => ({name: "Akash"}); 
console.log(sum3()); 