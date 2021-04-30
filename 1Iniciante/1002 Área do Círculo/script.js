var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var Pi = 3.14159
var raio = parseFloat(lines.shift());

var circleArea = () => (Pi * Math.pow(raio, 2)).toFixed(4)

var result = () => console.log('A=' + circleArea());

result()
