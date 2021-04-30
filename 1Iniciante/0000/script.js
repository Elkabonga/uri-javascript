var input = require('fs').readFileSync('stdin', 'utf8');
var [x, y] = input.split(' ').map(item => parseInt(item));

var soma = () => x + y

console.log(soma());
