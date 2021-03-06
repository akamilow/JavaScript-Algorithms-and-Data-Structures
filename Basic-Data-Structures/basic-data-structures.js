// Use an Array to Store a Collection of Data
let yourArray = ['one', 2, 'three', true, false, undefined, null];
console.log(yourArray.length); // 7

// Access an Array's Contents Using Bracket Notation
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "x"
// Only change code above this line
console.log(myArray);

// Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    // Only change code above this line
    return arr;
  }
  console.log(mixedNumbers(['IV', 5, 'six']));
  // [ 'I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', 9 ]

  // Remove Items from an Array with pop() and shift()
  function popShift(arr) {
    let popped = arr.pop(); // last element
    let shifted = arr.shift(); // first element
    return [shifted, popped];
  }
  console.log(popShift(['challenge', 'is', 'not', 'complete']));
// [ 'challenge', 'complete' ]

// Remove Items Using splice()
/**
 * first parameter represents the index on the array from which to begin removing elements,
 *  while the second parameter indicates the number of elements to delete
 */
 const arr = [2, 4, 5, 1, 7, 5, 2, 1];
 // Only change code below this line
 arr.splice(1,4);
 // Only change code above this line
 console.log(arr);

 // Add Items Using splice()
function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
  // Only change code above this line
  return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// Copy Array Items Using slice()
function forecast(arr) {
  // Only change code below this line
  let a = arr.slice(2,4);
  return a;
}
// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// Copy an Array with the Spread Operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));

// Combine Arrays with the Spread Operator
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence =  ['learning', ...fragment, 'is', 'fun']; // Change this line
  return sentence;
}
console.log(spreadOut()); // [ 'learning', 'to', 'code', 'is', 'fun' ]

// Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem) {
  // Only change code below this line
  return arr.indexOf(elem) >= 0;
  // Only change code above this line
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// Iterate Through All an Array's Items Using For Loops
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); // filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18) should return [[10, 8, 3], [14, 6, 23]]

// Create complex multi-dimensional arrays
let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array',['deep']],
  ['mutate', 1327.98, 'splice', 'slice', 'push',[['deeper']]],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth',[[['deepest']]]]
  // Only change code above this line
];

// Add Key-Value Pairs to JavaScript Objects
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
// Only change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// Only change code above this line
console.log(foods);

// Modify an Object Nested Within an Object
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line
console.log(userActivity);

// Access Property Names with Bracket Notation
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
  return foods[scannedItem];
  // Only change code above this line
}
console.log(checkInventory("apples"));

// Use the delete Keyword to Remove Object Properties
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line
console.log(foods);

// Check if an Object has a Property
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  return ['Alan', 'Jeff', 'Sarah', 'Ryan'].every(name => userObj.hasOwnProperty(name))
}
console.log(isEveryoneHere(users));

// Iterate Through the Keys of an Object with a for...in Statement
const userss = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;
  for (let i in usersObj) {
    if (usersObj[i].online === true) {
      count++;
    }
  }
  return count;
  // Only change code above this line
}
console.log(countOnline(userss));

// Generate an Array of All Object Keys with Object.keys()
let usersss = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj);
  // Only change code above this line
}
console.log(getArrayOfUsers(usersss));

// Modify an Array Stored in an Object
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // Only change code above this line
}
console.log(addFriend(user, 'Pete'));