var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var number1 = parseFloat(lines.shift());
var number2 = parseFloat(lines.shift());

var weightnumber1 = 3.5
var weightnumber2 = 7.5

var average = ((number1 * weightnumber1) + (number2 * weightnumber2)) / (weightnumber1 + weightnumber2)

console.log('MEDIA = ' + (average).toFixed(5));
