/*
Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.
*/
function palindrome(str) {
    let newStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let reverseStr = newStr.split("").reverse().join("");
    if (newStr === reverseStr) {
        return true;
    } else {
        return false;
    }
}
  
palindrome("eye");