var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const number1 = parseFloat(lines.shift());
const number2 = parseFloat(lines.shift());
const number3 = parseFloat(lines.shift());

const weight1 = 2;
const weight2 = 3;
const weight3 = 5;

const totalWeightNote = () =>
  number1 * weight1 + number2 * weight2 + number3 * weight3;

const weightTotal = () => weight1 + weight2 + weight3;

const average = (totalWeightNote() / weightTotal()).toFixed(1);

console.log("MEDIA = " + average);
