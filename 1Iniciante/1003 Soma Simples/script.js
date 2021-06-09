var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const number1 = () => parseInt(lines.shift());
const number2 = () => parseInt(lines.shift());

const sumNumbers = () => number1() + number2()

console.log(`SOMA = ${sumNumbers()}`);
