var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const number1 = () => parseFloat(lines.shift());
const number2 = () => parseFloat(lines.shift());

const weightnumber1 = () => 3.5;
const weightnumber2 = () => 7.5;

const average = () =>
  (
    (number1() * weightnumber1() + number2() * weightnumber2()) /
    (weightnumber1() + weightnumber2())
  ).toFixed(5);

console.log(`MEDIA = ${average()}`);
