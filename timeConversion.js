/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example:

s = '12:01:00PM'
return '12:01:00'
S = '12:01:00AM'
return '00:01:00'

INPUT:
07:05:45PM
OUTPUT:
19:05:45
*/

function timeConversion(s) {
    let hour = s.slice(0, 2);
    let min = s.slice(3, 5);
    let sec = s.slice(6, 8);
    let ampm = s.slice(8, 10);
    
    if (ampm === 'PM') {
        if (hour != '12') {
            hour = parseInt(hour) + 12;
        }
    } else {
        if (hour == '12') {
            hour = '00';
        }
    }
    return hour + ':' + min + ':' + sec;
}
console.log(timeConversion('07:05:45PM'));