var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var number1 = parseInt(lines.shift());
var number2 = parseInt(lines.shift());

var PROD = number1 * number2

console.log('PROD = ' + PROD);
