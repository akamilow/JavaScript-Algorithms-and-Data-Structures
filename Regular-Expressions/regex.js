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

// Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myyRegex = /<.*?>/; // Change this line
let rresult = text.match(myRegex);

// Find One or More Criminals in a Hunt
let reCriminals = /C+/; // Change this line

// Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let rrresult = calRegex.test(rickyAndCal);

// Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let resulllt = lastRegex.test(caboose);

// Match All Letters and Numbers
let quoteeSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let resssult = quoteSample.match(alphabetRegexV2).length;

// Match Everything But Letters and Numbers
let quooteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let resuult = quoteSample.match(nonAlphabetRegex).length;

// Match All Numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let resuullt = movieName.match(numRegex).length;

// Match All Non-Numbers
let movieNaame = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let rreesult = movieName.match(noNumRegex).length;

/**
 * Restrict Possible Usernames
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.
You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

* Usernames can only use alpha-numeric characters.
* The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
* Username letters can be lowercase and uppercase.
* Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
 */
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let resulltt = userCheck.test(username);

// Match Whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let reessult = sample.match(countWhiteSpace);

// Match Non-Whitespace Characters
let sampple = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let resullttt = sample.match(countNonWhiteSpace);

// Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i; // Change this line
let ressuult = ohRegex.test(ohStr); // true

// Specify Only the Lower Number of Matches

/**
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
In order, the three test calls would return true, false, and true.
 */

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let reesssult = haRegex.test(haStr);

// Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Timm{3}ber/; // Change this line
let reessuult = timRegex.test(timStr);

// Check for All or None
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let reeesult = favRegex.test(favWord);