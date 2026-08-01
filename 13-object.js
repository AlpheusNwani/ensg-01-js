// Creating an object using the object literal
const worker = {
    name: "Maxwell Williams",
    age: 25
}

// Using the object constructor
const student = new Object();
student.name = "john doe";
student.course = "computer engineering"

console.log(student);

// Defining an empty object
const person = {};
console.log(person);

{
    // Accessing the properties of an object
    const person = {
        name: "John Doe",
        age: 20,
        role: "Backend Engineer",
        stateOfOrigin: "Enugu",
        "Place of birth": "Lagos",
    }

    console.log(person.age);
    console.log(person.stateOfOrigin);
    console.log(person["Place of birth"]);
    console.log(person["name"]);

    
}

{
    // Modifying objects
    const person = {
        name: "John Doe",
        age: 20,
        role: "Backend Engineer",
        stateOfOrigin: "Enugu",
        "Place of birth": "Lagos",
    }

    person.role = "Frontend Engineer";
    person["Place of birth"] = "London";
    console.log(person);

    // Adding a new property to an object
    person.location = "Lagos, Nigeria"
    console.log(person);

    // Deleting an object property
    delete person["Place of birth"];
    delete person.age;
    console.log(person);
}

// Nested Objects
const user = {
    name: "John Doe",
    age: 20,
    role: "Backend Engineer",
    stateOfOrigin: "Enugu",
    "place of birth": {
        city: "Lekki Phase 1",
        state: "Lagos State"
    },
    address: {
        streetNumber: 10,
        streetName: "Azikiwe",
        city: "ogui",
        lga: "Enugu North",
        state: "Enugu",
        country: "Nigeria"
    },
    hobbies: ["reading", "dancing", "travelling", "building apps"]
}
console.log(user.address.streetName);
console.log(user["place of birth"].city);
console.log(user.hobbies[2]);

// ======= Class Activity ========
// Create an object representing a book (title, author, pages, isRead)


// Object Methods
const counter = {
    countValue: 5,
    increaseCount: function() {
        return this.countValue = this.countValue + 1;
    },
    getCountValue() {
        return this.countValue;
    }
}

console.log(counter.countValue);
counter.increaseCount();
counter.increaseCount();
counter.increaseCount();
counter.increaseCount();
const currentCountState = counter.getCountValue();
console.log(currentCountState);

// Example using banking
const bankAccount = {
    accountBalance: 5000,
    makeDeposit: function(amount) {
        return this.accountBalance += amount;
    },
    withdraw(amount) {
        // guard
        if (amount > this.accountBalance) {
            console.log("Insufficient funds");
            return;
        }

        return this.accountBalance -= amount;
    },
    getAccountBalance() {
        return this.accountBalance;
    }
}

bankAccount.makeDeposit(55000);
bankAccount.makeDeposit(30000);
console.log(bankAccount.getAccountBalance());
bankAccount.withdraw(45000);
console.log(bankAccount.getAccountBalance());
bankAccount.withdraw(125000);