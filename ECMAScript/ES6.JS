// Compare Scopes of the var and let Keywords
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// Here the console will display the value 3.
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
// Here the console will display the value 2, and an error that i is not defined.

function checkScope() {
    // var for let
    let i = 'function scope';
    if (true) {
        // var for let
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Using s = [2, 5, 7] would be invalid
  return s;
}
editInPlace();

//JavaScript provides a function Object.freeze to prevent data mutation.
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => {
  return new Date();
};

//Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// Set Default Parameters for Your Functions
const increment = (number, value = 1) => number + value;

// Use the Rest Parameter with Function Parameters
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

// Use the Spread Operator to Evaluate Arrays In-Place
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // maximus = 89

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Change this line
console.log(arr2);

// Use Destructuring Assignment to Extract Values from Objects
// ES5
const user = { name: 'John Doe', age: 34 };
const names = user.name;
const ages = user.age;
//ES6
const { name, age } = user;

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const {today, tomorrow} = HIGH_TEMPERATURES;

// Use Destructuring Assignment to Assign Variables
const HIGHTEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
// Only change code below this line
const {today: highToday} = HIGHTEMPERATURES;
const {tomorrow: highTomorrow} = HIGHTEMPERATURES; 
// Only change code above this line
console.log(highToday) // 77

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
// Only change code below this line
const { today: { low: lowToday }} = LOCAL_FORECAST;
const { today: { high: HighToday }} = LOCAL_FORECAST;
// Only change code above this line

// Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a] // a = 6, b = 8

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const Arr = removeFirstTwo(source); // [3, 4, 5, 6, 7, 8, 9, 10]

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
// Only change code below this line
// const half = (stats) => (stats.max + stats.min) / 2.0;
const half = ({max, min}) => (max + min) / 2.0;
// Only change code above this line
console.log(half(stats)) // 28.015

// Create Strings using Template Literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line
  return failureItems;
}
const failuresList = makeList(result.failure);

// Write Concise Object Literal Declarations Using Object Property Shorthand
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
//--------------------
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return { name, age, gender };
  // Only change code above this line
};

// Write Concise Declarative Functions with ES6
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
//--------------------------------------
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

// Use class Syntax to Define a Constructor Function
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
//----------------------------
// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

// Use getters and setters to Control Access to an Object
// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  // getter
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  // setter
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
// Only change code above this line
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

// Create a Module Script
<html>
  <body>
    {/* <!-- Only change code below this line --> */}
    <script type="module" src="index.js"></script>
    {/* <!-- Only change code above this line --> */}
  </body>
</html>

// Use export to Share a Code Block
const uppercaseString = (string) => {
  return string.toUpperCase();
}
const lowercaseString = (string) => {
  return string.toLowerCase()
}
export {uppercaseString, lowercaseString};

// Reuse JavaScript Code Using import
import { uppercaseString, lowercaseString } from './string_functions.js';
// Only change code above this line
uppercaseString("hello");
lowercaseString("WORLD!");

// Use * to Import Everything from a File
import * as stringFunctions from "./string_functions.js";
// Only change code above this line
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// Create an Export Fallback with export default
export default function subtract(x, y) {
  return x - y;
}