let num = 10;
console.log(num);
console.log(num.toFixed(2));

let num1 = new Number(100);
console.log(num1);

let numstr = num1.toString();
console.log(numstr);

console.log(numstr.length);
console.log(numstr.charAt(0));

let num2 = 10000000;
console.log(num2.toLocaleString('en-IN'));

//--------------------------------------------------Math-----------------------------------------------------

let score = -10
console.log(Math.abs(score));

let score1 = 10.8;
console.log(Math.round(score1));

let min = 1;
let max = 7;
let randomNum = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum);
