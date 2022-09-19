/**
 * Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
 */
function binaryAgent(str) {
    let binarySplit = str.split(" ")
    let letterNumArr = []
    let letterArr = []

    for (let i in binarySplit) {
        letterNumArr.push(parseInt(binarySplit[i], 2))
    }

    for (let i in letterNumArr) {
        letterArr.push(String.fromCharCode(letterNumArr[i]))
    }
    return letterArr.join("")
}

// function binaryAgent(str) { // another solution
//     return String.fromCharCode(
//         ...str.split(" ").map(function(char) {
//             return parseInt(char, 2);
//         })
//     );
// }
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))