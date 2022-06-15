// Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

// Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let resultt = waldoRegex.test(waldoIsHiding);

// Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let resulttt = petRegex.test(petString);

// Ignore Case While Matching, using i flag
let myStringg = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let resultttt = fccRegex.test(myString); //FrEeCoDeCamp FReeCodeCAmp

// Extract Matches, using .match() 
/**
 * Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

'string'.match(/regex/);
/regex/.test('string');
 */
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let resul = extractStr.match(codingRegex); // Change this line