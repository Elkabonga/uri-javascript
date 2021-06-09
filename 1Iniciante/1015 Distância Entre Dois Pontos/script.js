var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const inputX1Y1 = lines.shift().split(" ", 2);
const inputX2Y2 = lines.shift().split(" ", 2);

const x1 = () => Number(inputX1Y1[0]);
const y1 = () => Number(inputX1Y1[1]);
const x2 = () => Number(inputX2Y2[0]);
const y2 = () => Number(inputX2Y2[1]);

const distance = (a, b, c, d) =>
  Math.sqrt((a - b) ** 2 + (c - d) ** 2).toFixed(4);

console.log(distance(x2(), x1(), y2(), y1()));
