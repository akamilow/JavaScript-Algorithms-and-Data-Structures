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

// Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    let newStr = "";
    if (num < 0) {
        return newStr;
    } else {
        for (let i = 0; i < num; i++) {
            newStr += str;
        }
        return newStr;
    }
}
  
repeatStringNumTimes("abc", 3);

// Truncate a String
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    }
    return str;
} 
truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Finders Keepers
function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num;
        }
    }
    return undefined;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

// Boo who
function booWho(bool) {
    if (bool === true || bool === false) {
        return true;
    }
    return false;
}
booWho(null);

// Title Case a Sentence
// My Solution
function titleCase(str) {
    let words = str.split(' ');
    let newStr = "";
    for (let i = 0; i < words.length; i++) {
        let firstLetter = words[i].substring(0, 1).toUpperCase();
        let restOfWords = words[i].substring(1).toLowerCase();
        newStr += firstLetter + restOfWords + " ";
    }
    return newStr;
}
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
// freeCodeCamp solution
/*
const newTitle = str.split(" ");
const updatedTitle = [];
for (let st in newTitle) {
  updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
}
return updatedTitle.join(" ");
*/

// Slice and Splice
function frankenSplice(arr1, arr2, n) {
    let newArr = arr2.slice(0, n);
    newArr.push(...arr1);
    newArr.push(...arr2.slice(n));
    return newArr;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Falsy Bouncer
function bouncer(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {   // if the element is truthy
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
bouncer([7, "ate", "", false, 9]);

/* // Alt Solution
function bouncer(arr) {
    return arr.filter(Boolean);
}
*/

// Where do I Belong
function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a, b) => a - b);
    return arr.indexOf(num);
}
getIndexToIns([40, 60], 50);

// Mutations
function mutation(arr) {
    let first = arr[0].toLowerCase();
    let second = arr[1].toLowerCase();
    for (let i = 0; i < second.length; i++) {
        if (first.indexOf(second[i]) === -1) {
            return false;
        }
    }
    return true;
}
console.log(mutation(["hello", "Hello"]));

// Chunky Monkey
function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);