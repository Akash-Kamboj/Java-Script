var a = 100;
let b = 200;

if (true) {
    var a = 10;
    let b = 30;
    const c = 50;
}
console.log(a);
console.log(b);
// console.log(c);

// Nested scopes
function one()
{
    let name = "Akash";
    
    function two()
    {
        let age = 23;
        console.log(name);

        function three()
        {
            let city = "Delhi";
            console.log(age);
        }
        three();
    }
    two();
        
}
one();
