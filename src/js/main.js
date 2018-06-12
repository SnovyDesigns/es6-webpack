// Zadanie 1
const first = 'Hello',
      second = 'World'; // eslint-disable-line

console.log(`Nowy zapis string: ${first} ${second}`);


// Zadanie 2
const multiply = (a = 1, b = 1) => a * b;
console.log(`Wynik mnozenia podanych wartości: ${multiply(5)}`);


// Zadanie 3
const average = (...args) => args.reduce((prevVal, val) => prevVal + val) / args.length;
console.log(`Średnia arytmetyczna podanych wartości: ${average(1, 2, 3, 4)}`);


// Zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(`Średnia arytmetyczna z wartości z tablicy: ${average(...grades).toFixed(2)}`);


// Zadanie 5
const [, , firstName, , lastName] = [1, 4, 'Iwona', false, 'Nowak'];
console.log(`Zmienne utworzone z wartości z tablicy: firstName = ${firstName}, lastName = ${lastName}`);


// CW - 1
// https://www.codewars.com/kata/string-templates-bug-fixing-number-5
function buildString(...template){
    return `I like ${template.join(', ')}!`;
}
console.log(buildString('Cheese','Milk','Chocolate'));


// CW - 2: 
// https://www.codewars.com/kata/training-js-number-22-unlock-new-skills-arrow-function-spread-operator-and-deconstruction/train/javascript
function shuffleIt(arr,...params){
    params.forEach(element => {
        let [a, b] = element || [];
        [arr[a], arr[b]] = [arr[b], arr[a]];
    });
    return arr;
}


// CW - 3
// https://www.codewars.com/kata/sum-with-arrows/train/javascript
var Sum = 'sum = function(arr){ return arr.reduce((prevVal, val) => prevVal + val); }';    
// let Sum = arr => {return arr.reduce((prevVal, val) => prevVal + val);};


// CW - 4
// https://www.codewars.com/kata/unpacking-arguments
function spread(func, args) {
    return func(...args);
}
