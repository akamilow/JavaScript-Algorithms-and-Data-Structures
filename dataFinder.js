/**
Implement the function dataFinder such that:

it takes a single argument data, an array of integers.

it return a new functin that is called 'find'.
    'find' takes 3 arguments: minRange (Integer), maxRange (Integer), and value (Integer). 
    it performs the following:
        it searches for the value in the data array in the inclusive range [minRange - maxRange]
        using 0-based indexing. If value is found int the givenrange, it returns true. 
        otherwise, it returns false.
    if minRange or maxRange id beyond an end of the array, thorws and error object with the message of 'Invalid range'.

For example, calling dataFinder([1,6,3,0,2,15,10]) must return a function 'find', such that Calling
fing(2,4,10) return false. It searhes for 10 in the inclusive range 2 through 4, the subarray [3,0,2].
It is not found in the given range as it lies at index 6. So the function return false.
*/

function dataFinder(data) {
    return function find(minRange, maxRange, value) {
        if (minRange < 0 || maxRange >= data.length) {
            throw new Error('Invalid range');
        }
        for (let i = minRange; i <= maxRange; i++) {
            if (data[i] == value) {
                return true;
            }
        }
        return false;
    }
}
/*
Input:
15 1 10 5 4 20

1 4 4

Output:
true
*/