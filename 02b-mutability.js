// object 
const person = {
    name: "John Doe",
    age: 22,
    getBirthYear() {
        return new Date().getFullYear() - this.age;
    }
}

person.role = "Data Engineer";

console.log(person.getBirthYear());

// array
const letters = ["a", "b", "c", "d"];
letters.pop();

console.log(letters);


// primitive
let myLuckyNumber = 5;
5 * 6
myLuckyNumber *= 6;
console.log(myLuckyNumber);

let userName = "MATHEW";
userName = userName.toLowerCase();
console.log(userName);