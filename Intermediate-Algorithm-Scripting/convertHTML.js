/*
Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/
function convertHTML(str) {
    let newStr = str.split("")
    for(let i = 0; i < newStr.length; i++) {
        switch(newStr[i]) {
            case "&":
                newStr[i] = "&amp;"
                break;
            case "<":
                newStr[i] = "&lt;"
                break;
            case ">":
                newStr[i] = "&gt;"
                break;
            case "\"":
                newStr[i] = "&quot;"
                break;
            case "'":
                newStr[i] = "&apos;"
                break;
        }
    }
    return newStr.join("");
}
console.log(convertHTML("Dolce & Gabbana"))