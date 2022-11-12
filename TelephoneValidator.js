/**
Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
The area code is required. If the country code is provided, you must confirm that the country code is 1. 
Return true if the string is a valid US phone number; otherwise return false.
*/
// function telephoneCheck(str) {
//     let validChar = ["0","1","2","3","4","5","6","7","8","9","-","(",")","?"," "]
//     let validCharStr = ""

//     for(let i = 0; i < str.length; i++) {
//         for (let j = 0; j < validChar.length; j++) {
//             if (str[i] === validChar[j]) {
//                 validCharStr += str[i]
//             }
//         }
//     }
//     console.log(validCharStr)
//     if (validCharStr[0] === "-") { return false }
//     if (validCharStr[1] !== " ") { return false }
//     if (validCharStr.includes("?")) { return false }
//     if (validCharStr.indexOf("(") === -1 && validCharStr.indexOf(")") > -1) { return false }
//     if (validCharStr[0] === "(" && validCharStr[4] !== ")") { return false }
//     if (validCharStr[0] === "(" && validCharStr[4] === ")" || validCharStr[1] === "(" && validCharStr[5] === ")") { return true }

//     let cleanStr = validCharStr.replace(/-|\(|\)|\s/g,"")

//     console.log(cleanStr)
//     if (cleanStr.length === 10 || cleanStr.length === 11 && cleanStr[0] === "1") {
//         return true
//     }
//     return false
// }

function telephoneCheck(str) {
    var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
    return re.test(str);
}
console.log(telephoneCheck("(555)555-5555"))