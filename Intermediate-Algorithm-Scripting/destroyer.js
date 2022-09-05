/**
Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1]
destroyer([2, 3, 2, 3], 2, 3) should return []
*/

function destroyer(arr) {
    let args = Array.prototype.slice.call(arguments);
    args.splice(0,1);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                delete arr[i];
            }
        }
    }
    return arr.filter(Boolean);
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
