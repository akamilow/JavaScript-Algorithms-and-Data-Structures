/*
You are given a two-digit integer n. Return the sum of its digits
*/
function solution(n) {
    return n.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
}