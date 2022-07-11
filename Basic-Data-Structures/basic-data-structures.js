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