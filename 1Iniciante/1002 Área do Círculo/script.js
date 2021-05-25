var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const Pi = 3.14159
const raio = parseFloat(lines.shift());

const circleArea = () => (Pi * Math.pow(raio, 2)).toFixed(4)

const result = () => console.log('A=' + circleArea());

result()
