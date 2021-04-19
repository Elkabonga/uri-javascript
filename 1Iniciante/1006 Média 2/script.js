var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var number1 = parseFloat(lines.shift());
var number2 = parseFloat(lines.shift());
var number3 = parseFloat(lines.shift());

var weight1 = 2;
var weight2 = 3;
var weight3 = 5;

var totalWeightNote = number1 * weight1 + number2 * weight2 + number3 * weight3

var weightTotal = weight1 + weight2 + weight3

var average = (totalWeightNote / weightTotal).toFixed(1);

console.log("MEDIA = " + average);
