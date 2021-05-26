var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const myNumberArray1 = lines
  .shift()
  .split(" ", 3)
  .map((x) => +x);

const myNumberArray2 = lines
  .shift()
  .split(" ", 3)
  .map((x) => +x);

const calculate = (a, b) => a * b;

const product1 = () => calculate(myNumberArray1[1], myNumberArray1[2]);
const product2 = () => calculate(myNumberArray2[1], myNumberArray2[2]);

const totalResult = (product1() + product2()).toFixed(2);

console.log(`VALOR A PAGAR: R$ ${totalResult}`);
