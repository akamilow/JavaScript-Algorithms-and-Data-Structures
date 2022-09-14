/*
Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
 */
function sumFibs(num) { // op
    var fib = [1, 1];
    var sum = 2;
    for (var i = 2; i <= num; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        if (fib[i] % 2 !== 0 && fib[i] <= num) {
        sum += fib[i];
        }
    }
    return sum;
}

// mio
// function sumFibs(num) {
//     let arr = []
//     let prev2 = 0
//     let prev1 = 1
//     let c = 0
//     let oddArr = []
//     let counter = 0
  
//     for (let i = 1; i < num; i++) {
//         c = prev1 + prev2
//         prev2 = prev1
//         prev1 = c
//         arr.push(c)
//     }
  
//     arr.shift()
//     arr.shift()
//     arr.unshift(1, 1)
  
//     for(let i in arr) {
//         if (!(arr[i] % 2 === 0) && arr[i] <= num) {
//             oddArr.push(arr[i])
//         }
//     }
  
//     for(let i in oddArr) {
//         counter += oddArr[i]
//     }
    
//     return counter
// }
console.log(sumFibs(1000))