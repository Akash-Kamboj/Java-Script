if(2+2==4)
{
    console.log("Condition is true");
}
else
{
    console.log("Condition is false");
}

// falsy values in JavaScript
// false , 0, -0, "", null, undefined, NaN, BigInt(0)

// truthy values in JavaScript
// true, 1, -1, " ", "0", "false", [], {}, function(){}


let value = null ?? 5 ?? undefined ?? 10; // The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or undefined.
console.log(value);

// Ternary operator
let age = 18;
let canvote = (age >= 10 ) ? "yes" : "no";
console.log(canvote); 