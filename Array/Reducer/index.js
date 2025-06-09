let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = arr.reduce((acc, curr) => {
    return acc + curr;
},0);

console.log(sum);


let productcart = [
    {
        item : "watch",
        price : 1000,
    },
    {
        item : "phone",
        price : 20000,
    },
    {
        item : "laptop",
        price : 50000,
    }
]

let price = productcart.reduceRight((acc , curr) => {
    return acc + curr.price
}, 0);

console.log(price);

