var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var number1 = parseInt(lines.shift());
var number2 = parseInt(lines.shift());

var sumNumbers = number1 + number2

console.log('SOMA = ' + sumNumbers);
