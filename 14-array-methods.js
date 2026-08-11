const strings = ["a", "b", "c", "d", "e"];

// forEach() method
/* 
- It doesn't mutate the original array.
- It doesn't return a new array
*/

// Syntax: array.method(callback) 
strings.forEach((string, index, arr) => {
    // console.log(`${string} has an index of ${index}`);
    console.log(arr[index]);
});

const students = [
    {
        name: "Chinedu",
        age: 22,
        course: "Computer Science"
    },
    {
        name: "Amaka",
        age: 20,
        course: "Information Technology"
    },
    {
        name: "David",
        age: 24,
        course: "Software Engineering"
    }
];

students.forEach((student, index) => {
    console.log(`${index + 1}. ${student.name} - ${student.course} `);

    // What JavaScript does
    // (0 + 1). Chinedu - 
    // 1. Chinedu

    // (1 + 1). Amaka -
    // 2. Amaka

    // And so on..
});


/* 
const products = [
    {
        name: "Laptop",
        price: 500000,
        category: "Electronics"
    },
    {
        name: "Office Chair",
        price: 85000,
        category: "Furniture"
    },
    {
        name: "Backpack",
        price: 25000,
        category: "Accessories"
    },
    {
        name: "Headphones",
        price: 45000,
        category: "Electronics"
    }
];
*/


// filter() method
// - It returns a new array
// - It doesn't modify the original array
// Syntax: array.method(callback)
{
    const strings = ["a", "b", "c", "d", "e"];
    // const filteredStrings = strings.filter((string) => {
    //     return string !== "d";
    // });
    const filteredStrings = strings.filter(string => string !== "d");
    console.log(filteredStrings);
    console.log(strings);
}

const products = [
    {
        name: "Laptop",
        price: 500000,
        category: "Electronics"
    },
    {
        name: "Office Chair",
        price: 85000,
        category: "Furniture"
    },
    {
        name: "Backpack",
        price: 25000,
        category: "Accessories"
    },
    {
        name: "Headphones",
        price: 45000,
        category: "Electronics"
    }
];

const filteredProducts = products.filter((product, index) => {
    // return product.category !== "Electronics";
    // return product.price >= 30000;
    return index % 2 !== 0;
});

console.log(filteredProducts);

// Map() method
// - It returns a new array
// - It doesn't modify the original array
// Syntax: array.method(callback)

// Basic map example
const numbers = [1, 2, 3, 4, 5];
const tripledNumbers = numbers.map((num) => num * 3);
console.log(tripledNumbers);

/* 
const prices = [1200, 4500, 3000, 800];
Task:

Using the map() method:

Create a new array called discountedPrices

Apply a 10% discount to each price

Return the new array

*/

const prices = [1200, 4500, 3000, 800];
// 10% = 10 / 100

const discountedPrices = prices.map(price => {
    return price - (0.1 * price);
});

console.log(discountedPrices);

{
    const strings = ["apple", "banana", "orange"];
    const modifiedStrings = strings.map(str => {
        return str.toUpperCase();
    });
    console.log(modifiedStrings);
}

/* 

const customers = ["Chioma", "David", "Amina", "Tunde"];

Task: Return the first 3 letters of each customer name as a new array

*/

const customers = ["Chioma", "David", "Amina", "Tunde"];

const shorterCustomerNames = customers.map(customer => customer.slice(0, 3));
console.log(shorterCustomerNames);


/* 
You are given student data:

const students = [
  { name: "John", score: 45 },
  { name: "Mary", score: 80 },
  { name: "Ali", score: 67 },
  { name: "Grace", score: 92 }
];

Task:

Using map():

Return a new array of objects

Add a new property called status

"Pass" if score is 50 or above

"Fail" if below 50

Expected Output:

[
  { name: "John", score: 45, status: "Fail" },
]


*/


{
    const students = [
        { name: "John", score: 45 },
        { name: "Mary", score: 80 },
        { name: "Ali", score: 67 },
        { name: "Grace", score: 92 }
    ];

    const studentsStatus = students.map(student => {
        let status;

        if (student.score >= 50) {
            status = "pass";
        } else {
            status = "fail";
        }

        return {
            name: student.name,
            score: student.score,
            status
        }
    });

    console.log(studentsStatus);
}


/* 
==================== Task =====================

You are given user data from a backend:

const users = [
  { id: 1, firstName: "Jane", lastName: "Doe", isActive: true },
  { id: 2, firstName: "Mark", lastName: "Smith", isActive: false },
  { id: 3, firstName: "Sarah", lastName: "Johnson", isActive: true }
];

Task:
Using map():

Return a new array

Combine firstName and lastName into fullName

Replace isActive with:

"Active User" if true

"Inactive User" if false

Remove the original firstName and lastName properties

Expected structure:

[
  { id: 1, fullName: "Jane Doe", status: "Active User" },
]

*/

{
    const users = [
        { id: 1, firstName: "Jane", lastName: "Doe", isActive: true },
        { id: 2, firstName: "Mark", lastName: "Smith", isActive: false },
        { id: 3, firstName: "Sarah", lastName: "Johnson", isActive: true }
    ];

    // 1. Replace firstName and lastName with fullName
    // 2. Replace isActive with "Active user" when isActive is true, otherwise, we use "Inactive user"
    const modifiedUsersData = users.map((user) => {
        return {
            id: `${user.id}`,
            fullName: `${user.firstName} ${user.lastName}`,
            isActive: `${user.isActive ? "Active user" : "Inactive user"}`
        }
    });

    console.log(modifiedUsersData);
    console.log(users);
}


// Reduce Method
// Syntax: array.reduce(callback function, initial value)
// It doesn't modify the original array
// It return a single value

{
    const prices = [1000, 3500, 7000, 1500];
    const totalPrices = prices.reduce((acc, price) => acc + price, 0);
    console.log(totalPrices);

    // What is accumulated value?
    // 0 + 1000 = 1000
    // 1000 + 3500 = 4500
    // 4500 + 7000 = 11500
    // 11500 + 1500 = 13000


}

{
    const products = [
        {
            name: "Laptop",
            price: 500000,
            category: "Electronics"
        },
        {
            name: "Office Chair",
            price: 85000,
            category: "Furniture"
        },
        {
            name: "Backpack",
            price: 25000,
            category: "Accessories"
        },
        {
            name: "Headphones",
            price: 45000,
            category: "Electronics"
        }
    ];

    // Using implicit arrow function
    // const totalProductCost = products.reduce((acc, product) => acc + product.price, 0);

    // Explicit
    const totalProductCost = products.reduce((acc, product) => {
        return acc + product.price
    }, 0);
    console.log(totalProductCost);
}


{
    const products = [
        {
            name: "Laptop",
            price: 500000,
            category: "Electronics",
            quantity: 2
        },
        {
            name: "Office Chair",
            price: 85000,
            category: "Furniture",
            quantity: 5
        },
    ];

    const totalPrice = products.reduce((acc, product) => {
        return acc + (product.price * product.quantity);
    }, 0);

    console.log(totalPrice);
}

// ================= Class Activity ==================

// const products = ["laptop - 500", "bag - 100", "phoneStand - 50"];

/* 
Using the map method return a new array with the structure 
{
    productName: laptop,
    price: 500
}
*/

const sales = [
 { product: "Laptop", quantity: 3, price: 250000 },
 { product: "Mouse", quantity: 10, price: 5000 },
 { product: "Keyboard", quantity: 5, price: 15000 }
];

// Using the reduce method, get the total sales amount.


{
    const products = ["laptop - 500", "bag - 100", "phoneStand - 50"];

    const items = products.map(product => {
        const splittedText = product.split(" - "); //  EX: [laptop, 500]

        return {
            productName: `${splittedText[0]}`,
            price: `${splittedText[1]}`,
        }
    });
    console.log(items);
}