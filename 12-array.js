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

// ========== Class Activity ============ 

{
    const colors = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Orange",
        "Purple",
        "Pink",
        "Brown",
        "Black",
        "White",
        "Gray",
        "Cyan"
    ];

    function getAnyRandomColor(colorsArray) {
        const randomColorIndex = Math.floor(Math.random() * colorsArray.length);
        return colorsArray[randomColorIndex];
    }

    console.log(getAnyRandomColor(colors));

}

// Arrays and Loops

const hobbies = ["reading", "dancing", "coding", "travelling"];

// Using for loop
for (let index = 0; index < hobbies.length; index++) {
    // console.log(hobbies[index]);
}

// Using for-of loop 
for (const hobby of hobbies) {
    console.log(hobby);
}


// Array Methods
const workers = ["john", "sax", "emma", "andy"];


// 1. Push Method
workers.push("maxwell", "peter");
console.log(workers);

// 2. Pop Method
workers.pop();
workers.pop();
console.log(workers);

// 3. Unshift Method
workers.unshift("mariam", "pascal");
console.log(workers);

// 4. Shift Method
workers.shift();
console.log(workers);

// 5. Concat Method
const roles = ["devops", "frontend", "backend"];
const workersAndRoles = workers.concat(roles);
console.log(workersAndRoles);

// 6. Join Method
// [ 'pascal', 'john', 'sax', 'emma', 'andy' ]
// pascal, john, sax, emma, andy
console.log(workers.join(", "));


// 7. Slice Method
const cars = ["toyota", "benz", "lexus", "ford", "bmw", "chevrolet"];
console.log(cars.slice(2));
console.log(cars.slice(4));
const carResult = cars.slice(4, 5);
console.log(cars);
console.log(carResult);

// 8. Splice Method
// When it takes 1 argument
// const remainingCars = cars.splice(3);
// console.log(remainingCars);
// console.log(cars);

// when it takes 2 arguments
// The first argument is the start index and the second argument becomes the delete count
const reviewedCars = cars.splice(3, 2);
console.log(reviewedCars);
console.log(cars);

// When it takes 3 or more arguments
{
    const stringArray = ["a", "b", "c", "d", "e", "f"];

    const deletedStrings = stringArray.splice(2, 2, "g", "h");
    console.log(deletedStrings);
    console.log(stringArray);
}