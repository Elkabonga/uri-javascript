var input = require('fs').readFileSync('stdin', 'utf8');
var [x, y] = input.split(' ').map(item => parseInt(item));

const soma = () => console.log(x + y);

soma()
