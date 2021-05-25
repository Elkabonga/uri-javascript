var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const log = () => console.log(lines[0]);

log()
