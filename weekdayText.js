/*
Implement the function, weedays, which is an array of strings.

it takes a single argument, weekdays, which is an array of strings.

it returns a new function that called getText that takes a single integer argument, number, objectamd does the following:

it returns the value from the weekdays array at that 0-based number.

if number is out of range, the function throws an error object with the message of 'invalid weekday number'

For example, calling weekdayText(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']) must return a function getText, such that calling getText(6) returns 'sun
*/

function weekdayText(weekdays) {
    return function getText(number) {
        if (number < 0 || number >= weekdays.length) {
            throw new Error('Invalid weekday number');
        }
        return weekdays[number];
    }
} 

/**
Input:
Mon Tue Wed Thu Fri Sat Sun

5

Output:
Sat
 */