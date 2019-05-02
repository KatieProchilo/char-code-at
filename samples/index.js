const charCodeAt = require('../lib/index');

const userInput =  ".3-_=";
const startIndex = 0;
const endIndex = 4;

console.log(`ANALYZING: "${userInput}"`);
console.log(`START INDEX: ${startIndex}`);
console.log(`END INDEX: ${endIndex}`);

charCodeAt.printCharCodes(userInput, startIndex, endIndex);