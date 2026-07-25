// Arrays

// Using array literal
const fruits = ["banana", "mango", "orange"];
const numbers = [1, 2, 3, 4, 5];

// Using the array constructor
const users = new Array("John", "Doe", "Max", 5, {name: "John"});

console.log(fruits);
console.table(numbers);
console.log(users);

// Empty array
const strings = [];
console.log(strings);


// Accessing the elements of an array
console.log(fruits[2]);
console.log(users[4]);


// Modifying elements of an array
fruits[1] = "grape";
console.log(fruits);

// Length property of an array
const colors = ["red", "green", "blue", "white", "purple", "black", "yellow", "pink", "indigo"];
console.table(colors);
console.log(colors.length);
console.log(colors[3]);

// Finding the index of an item in an array
console.log(colors.indexOf("white"));

// Accessing the last element in an array
console.log(colors[colors.length - 1]);

// Nested Arrays
const letters = [
    ["a", "b", "c"], 
    ["d", "e", "f"], 
    ["g", "h", ["i", "j", "k"]]
];

console.log(letters[0][1]);
console.log(letters[2][2][1]);

const students = [
    ["John", "Jane", "Mike"],
    ["David", "Sarah", "Peter"],
    ["Paul", "Grace", ["Daniel", "Esther", "James"]]
];

// Practice nested arrays with this
{
    const students = [
    ["John", "Jane", "Mike"],

    ["David", "Sarah", "Peter"],

    [
        "Paul",
        "Grace",
        [
            "Daniel",
            "Esther",
            [
                "James",
                [
                    "Michael",
                    "Sophia",
                    "Robert"
                ]
            ]
        ]
    ]
];
}