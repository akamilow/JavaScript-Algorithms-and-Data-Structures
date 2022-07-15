// Convert Celsius to Fahrenheit
function convertToF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}
convertToF(30);

// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
reverseString("hello");

// Factorialize a Number
// For example: 5 = 1 * 2 * 3 * 4 * 5 = 120
function factorialize(num) {
    if (num === 0) {
        return 1;
    } else {
        for (let i = num - 1; i >= 1; i--) {   
            num *= i;
        }
    }
    return num;
}
factorialize(5);

// Find the Longest Word in a String
function findLongestWordLength(str) {
    let words = str.split(' ');
    let longest = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest) {
            longest = words[i].length;
        }
    }
    return longest;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Return Largest Numbers in Arrays
function largestOfFour(arr) {
    let largest = [];
    for (let i = 0; i < arr.length; i++) {
        let largestNum = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largestNum) {
                largestNum = arr[i][j];
            }
        }
        largest.push(largestNum);
    }
    return largest;
}
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {
    let end = str.substring(str.length - target.length);
    if (end === target) {
        return true;
    } else {
        return false;
    }
}
confirmEnding("Bastian", "n");