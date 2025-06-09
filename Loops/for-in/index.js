let obj = {
    name: "John",
    age: 30,            
    city: "New York"
}

for(let x in obj)// Using for-in loop to iterate over object properties
{
    console.log(`${x} : ${obj[x]}`);

}