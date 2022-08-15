/*
Your task is to write a program that creates or splits Camel Case variable, method, and class names.

Input Format:
- Each line of the input file will begin with an operation (S or C) 
followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.

- The operation will either be S (split) or C (combine)

- M indicates method, C indicates class, and V indicates variable

- In the case of a split operation, the words will be a camel case method, class or variable name that you need to split into a 
space-delimited list of words starting with a lowercase letter.

- In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters that you need to combine 
into the appropriate camel case String. Methods should end with an empty set of parentheses to differentiate them from variable names.

Output Format:
- For each input line, your program should print either the space-delimited list of words (in the case of a split operation) or 
the appropriate camel case string (in the case of a combine operation).

Sample Input:
S;M;plasticCup()
S;C;LargeSoftwareBook
S;V;pictureFrame

C;M;white sheet of paper
C;C;coffee machine
C;V;mobile phone

Sample Output:
plastic cup
large software book
picture frame

whiteSheetOfPaper()
CoffeeMachine
mobilePhone
*/

function processData(input) {
    let inputArr = input.split(';');
    let operation = inputArr[0];
    let type = inputArr[1];
    let name = inputArr[2].split(' ');
    let result = '';

    if (operation === 'S' && type === 'M') {
        let nombre = name.join('').split(/(?=[A-Z])/).map(s => s.toLowerCase()).join(' ');
        let nombreModulo = nombre.replace(/\(|\)/g, '');
        result = nombreModulo;
    }

    if (operation === 'S' && type === 'C') {
        let nombreClase = name.join('').split(/(?=[A-Z])/).map(s => s.toLowerCase()).join(' ');
        result = nombreClase.charAt(0).toUpperCase() + nombreClase.slice(1);
    }
    
    if (operation === 'S' && type === 'V') {
        let nombreVariable = name.join('').split(/(?=[A-Z])/).map(s => s.toLowerCase()).join(' ');
        result = nombreVariable;
    }
    
    if (operation === 'C' && type === 'M') {
        let nombre = name;
        let nombreArr = []
        nombreArr.push(nombre[0].toLowerCase());
        for (let i = 1; i < nombre.length; i++) {
            nombreArr.push(nombre[i].charAt(0).toUpperCase() + nombre[i].slice(1));
        }
        result = nombreArr.join('') + '()';
    }

    if (operation === 'C' && type === 'C') {
        let nombre = name;
        let nombreArr = []
        for (let i = 0; i < nombre.length; i++) {
            nombreArr.push(nombre[i].charAt(0).toUpperCase() + nombre[i].slice(1));
        }
        result = nombreArr.join('');
    }

    if (operation === 'C' && type === 'V') {
        let nombre = name;
        let nombreArr = []
        nombreArr.push(nombre[0].toLowerCase());
        for (let i = 1; i < nombre.length; i++) {
            nombreArr.push(nombre[i].charAt(0).toUpperCase() + nombre[i].slice(1));
        }
        result = nombreArr.join('');
    }
    console.log(result);

} 
processData('C;V;mobile phone');