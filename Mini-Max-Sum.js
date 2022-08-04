/*
Given five positive integers, find the minimum and maximum values that can be calculated by 
summing exactly four of the five integers. Then print the respective minimum and maximum 
values as a single line of two space-separated long integers.

Example:
arr = [1, 3, 5, 7, 9]

The minimum sum is 1 + 3 + 5 + 7 = 16
The maximum sum is 3 + 5 + 7 + 9 = 24

*/
function miniMaxSum(arr) {
    let minArray = [];
    let maxArray = [];

    let sumMin = 0;
    let sumMax = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === Math.max(...arr) && arr[i] === Math.min(...arr)) {
            minArray.push(arr[i]);
            maxArray.push(arr[i]);
        }

        if (arr[i] !== Math.min(...arr)) {
            minArray.push(arr[i]);
        }

        if (arr[i] !== Math.max(...arr)) {
            maxArray.push(arr[i]);
        }
    }

    if (arr.length === minArray.length && arr.length === maxArray.length) {
        minArray.shift();
        maxArray.shift();
    }

    for (let i of minArray) {
        sumMin += i;
    }

    for (let i of maxArray) {
        sumMax += i;
    }

    console.log(sumMax +" "+ sumMin);
}
miniMaxSum([5, 5, 5, 5, 5]);
miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([1, 3, 5, 7, 9]);
miniMaxSum([7, 69, 2, 221, 8974]);
