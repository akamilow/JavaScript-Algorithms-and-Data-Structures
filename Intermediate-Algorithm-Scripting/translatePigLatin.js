/*
Pig Latin
Pig Latin is a way of altering English Words. 

The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, 
move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

translatePigLatin("algorithm") should return the string algorithmway.
translatePigLatin("california") should return the string aliforniacay.
*/
function translatePigLatin(str) {
    if (str.substring(0,1) === "a" || 
        str.substring(0,1) === "e" || 
        str.substring(0,1) === "i" || 
        str.substring(0,1) === "o" || 
        str.substring(0,1) === "u") {
        return str + "way";

    } else {
        let consonants = str.substring(0, str.search(/[aeiou]/));
        return str.substring(consonants.length) + consonants + "ay";
    }
}
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("schwartz"));