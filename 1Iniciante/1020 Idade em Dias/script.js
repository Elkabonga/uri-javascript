var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const inputDays = Number(lines.shift());

const year = () => Math.floor(inputDays / 365);

const restYear = () => inputDays % 365;
const months = () => Math.floor(restYear() / 30);

const days = () => restYear() % 30;

console.log(`${year()} ano(s)
${months()} mes(es)
${days()} dia(s)`);
