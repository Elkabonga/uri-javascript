var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const number1 = () => parseInt(lines.shift());
const number2 = () => parseInt(lines.shift());

const sum = (a, b) => a + b;

const result = () => console.log(`X = ${sum(number1(), number2())}`);

result();
