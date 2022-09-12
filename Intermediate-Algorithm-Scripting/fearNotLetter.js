/*
Missing letters
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/
function fearNotLetter(str) {
    const abc = "abcdefghijklmnopqrstuvwxyz"
    const abcSlice = abc.slice(abc.indexOf(str[0]), abc.indexOf(str[str.length - 1]) + 1)
    if (abcSlice === str) {
        return undefined
    } else {
        for (let i in abcSlice) {
            if (abcSlice[i] !== str[i]) {
                return abcSlice[i]
            }
        }
    }
}
console.log(fearNotLetter("abcdefghjklmno"))