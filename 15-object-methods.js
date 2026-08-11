const person = {
    name: "John Doe",
    age: 55,
    role: "Senior Analyst"
}

console.log(Object.keys(person)); // [ 'name', 'age', 'role' ]

console.log(Object.values(person)); // [ 'John Doe', 55, 'Senior Analyst' ]

console.log(Object.entries(person)); // [ [ 'name', 'John Doe' ], [ 'age', 55 ], [ 'role', 'Senior Analyst' ] ]

const product = {
    name: "Laptop",
    price: "$1200",
    brand: "DELL",
    model: "7532"
}

// Syntax: for (const key in object)

for (const key in product) {
    // console.log(key);
    // console.log(product[key]);
    console.log(`${key}: ${product[key]}`);
}

// [ 'name', 'age', 'role' ]
Object.keys(product).forEach(key => {
    console.log(`${key}: ${product[key]}`)
});

const myName = "John Doe";
console.log(myName); 