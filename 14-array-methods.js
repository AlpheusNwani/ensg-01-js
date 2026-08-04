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