var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const timeSpent = () => Number(lines.shift());
const averageSpeed = () => Number(lines.shift());

const km = (a, b) => a * b;
const liter = () => (km(timeSpent(), averageSpeed()) / 12).toFixed(3);

console.log(liter());
