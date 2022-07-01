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