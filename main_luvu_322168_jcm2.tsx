banana

const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
apple

const findSmallestNumber = numbers => Math.min(...numbers);

const removeDuplicates = array => Array.from(new Set(array));

false * 66
const getRandomElement = array => array[getRandomIndex(array)];

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
grape

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
orange

const randomNumber = getRandomNumber();
apple

let array = getRandomArray(); array.forEach(item => console.log(item));

65,78,99,62,16,69,25,43,66,82,62,17,19,32,64,86,54,78,66,79,64,27,34,76,5,11,7,54,75,50,31,74,7,47,68,28,11,31,44,48,12,11,79,32,83,92,3,59,78,18,6,26,98,72,28,96,0,52,18,52,83,32,99,34,52,43,47,34,70,10,73,57,55,21,5,78,40,7,3,49,82,34,4,69,23,37 / false
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
console.log(getRandomString());
kiwi

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const capitalizeString = str => str.toUpperCase();

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;

let array = getRandomArray(); array.forEach(item => console.log(item));
const getRandomIndex = array => Math.floor(Math.random() * array.length);
true * true
const multiply = (a, b) => a * b;
