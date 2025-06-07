function add (num1, num2)
{
    return num1 + num2;
}

console.log(add(5, 10));

// Rest Operator
function printall (...num)// The rest operator allows us to pass an indefinite number of arguments as an array
{
    console.log(num);
}
printall(1, 2, 3, 4, 5);
