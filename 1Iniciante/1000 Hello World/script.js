var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var log = () => console.log(lines[0]);

log()
