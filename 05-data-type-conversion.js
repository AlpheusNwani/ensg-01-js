// Implicit Conversion

// String Coercion
console.log("55" + 89);
console.log("55" + true);
console.log("55" + null);
console.log(9 + "88");

// Numeric Coercion
console.log("55" / 5);
console.log("55" * 5);
console.log("55" % 5);
console.log(("55" + 5) - 5);
console.log("1" - 5);
console.log([] * 5);

// Boolean Coercion
console.log("" || 55);
console.log(22 && "Hello");


// Explicit Conversions

// Number Conversion
// 1 Number()
console.log("Explicit conversion");
console.log(typeof "70");
console.log(Number("70")); // 70
console.log(Number("70.998")); // 70.998
console.log(Number("70.998px")); // NaN

// 2. parseInt()
console.log("parseInt");
console.log(parseInt("1001rem")); // 1001
console.log(parseInt("45.67")); // 45

// 3. parseFloat()
console.log("parseFloat");
console.log(parseFloat("45.67px")); // 45.67

// String Conversion
// 1. String()
console.log(String(true)); // "true"
console.log(String(35)); // "35"

// 2. toString()
console.log((57).toString());
let isLoggedIn = true;
console.log(isLoggedIn.toString());

// Boolean conversion
// 1. Boolean()
console.log("Boolean conversion");
console.log(Boolean("true")); // true
console.log(Boolean(1)); // true
console.log(Boolean(76)); // true
console.log(Boolean(null)); // false
console.log(Boolean("76 > 1000")); // false
console.log(Boolean("hello")); // true

// 2. !!
console.log(!!" "); // true
console.log(!!5); // true
console.log(!!0); // false

// Object Conversions
// 1. Stringify
const person = {
    firstName: "john",
    lastName: "doe",
    age: 26,
    role: "Senior backend dev"
};

const personString = JSON.stringify(person);
console.log(typeof personString);

// 2. parse
const personObj = JSON.parse(personString);
console.log(personObj);
console.log(personObj.role);