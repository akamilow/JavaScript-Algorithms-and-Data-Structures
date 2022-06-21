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

// Find More Than the First Match
/**
 * To search or extract a pattern more than once, you can use the global search flag: g.
 * let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
And here match returns the value ["Repeat", "Repeat", "Repeat"]
 * */ 

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig; // Change this line
let Result = twinkleStar.match(starRegex);; // Change this line

// Match Anything with Wildcard Period
/**
 * let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
Both of these test calls would return true.
 * 
 */

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let reSult = unRegex.test(exampleStr);

// Match Single Character with Multiple Possibilities
/**
 * let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.
 */

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let reslt = quoteSample.match(vowelRegex); // Change this line

// Match Letters of the Alphabet
let quoteSamplee = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let resu =  quoteSamplee.match(alphabetRegex);; // Change this line


// Match Numbers and Letters of the Alphabet
let quoteSampleee = "Blueberry 3.141592653s are delicious.";
let myRegexx = /[h-s2-6]/ig; // Change this line
let relt = quoteSample.match(myRegex); // Change this line

// Match Single Characters Not Specified
let quoteSammple = "3 blind mice.";
let myRegeex = /[^aeiou^0-9]/ig; // Change this line
let resullt = quoteSample.match(myRegex); // Change this line

// Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRRegex = /s+/g; // Change this line
let ressult = difficultSpelling.match(myRegex);

// Match Characters that Occur Zero or More Times
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line
let reesult = chewieQuote.match(chewieRegex);