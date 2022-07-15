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