/*
Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 and 2. 
In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
    let sieve = [], primes = []
    let count = 0
    
    for (let i = 2; i <= num; ++i) {
        if (!sieve[i]) {
            primes.push(i)
            for (let j = i << 1; j <= num; j += i) {
                sieve[j] = true
            }
        }
    }

    for(let i in primes) {
        count += primes[i]
    }

    return count;
}
  
console.log(sumPrimes(10))