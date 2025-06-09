let num = [1, 2, 3, 4, 5];

for (let a of num )
{
    console.log(a);
    
}

let map = new Map();// Create a new Map
// Add key-value pairs to the Map
map.set('name', 'John');
map.set('age', 30);     
map.set('city', 'New York');

for(let [key, vaule] of map)
{
    console.log(`${key}: ${vaule}`);
}

console.log(typeof(map)); 
// Output: object