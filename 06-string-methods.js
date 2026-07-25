// slice()
const word = "Count";
/* 
c = 0
o = 1
u = 2
n = 3
t = 4

*/
console.log(word.slice(1, 4));

const sentence = "I am learning javaScript";
console.log(sentence.slice(0, 13));
console.log(sentence.slice(5, 13));
console.log(sentence.slice(14));
console.log(sentence.slice(5));

// charAt()
let myName = "chiemezie";
// Chiemezie
console.log(myName.charAt(4));
const firstLetter = myName.charAt(0).toUpperCase();
const restOfName = myName.slice(1);
console.log(firstLetter + restOfName);

// length
const user = "max  well";
console.log(user.length);

const message = "Welcome to the world of tech";
console.log(message.length);

const person = {
    name: "John Doe",
    age: 22,
    hobbies: ["singing", "movies", "learning"],
    getBirthYear: function() {
        return new Date().getFullYear() - this.age;
    }
}
console.log(person.hobbies);
console.log(person.getBirthYear());

// indexOf
const text = "Everyone is great at something. This statement is so true";
console.log(text.indexOf("is"));
console.log(text.indexOf(" "));

// lastIndexOf
console.log(text.lastIndexOf("is"));


const someText = "I am that guy. I am great. I am a light";
console.log(someText.indexOf("I"));
console.log(someText.lastIndexOf("I"));

// includes()
console.log(someText.includes("come"));

// replace() and replaceAll()
const welcomeText = "Welcome JS to learning JS";
// replace(searchFor, replaceWith) 
console.log(welcomeText.replace("JS", "JavaScript"));
console.log(welcomeText.replaceAll("JS", "JavaScript"));
console.log(welcomeText.replaceAll("JS", "JavaScript"));
console.log(welcomeText.replaceAll(" ", ""));

// split()
const intro = "I am John Doe. I am learning to be a great guy";

console.log(intro.split(" "));

const firstName = "john";
const lastName = "doe"
console.log(firstName.concat(" ", lastName, " ", "is a great guy"));

