var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const sellersName = lines.shift();
const fixedSalary = parseInt(lines.shift());
const totalSalesMonth = parseFloat(lines.shift());

const percentageOfSale = () => (totalSalesMonth / 100) * 15;

const totalSalary = (fixedSalary + percentageOfSale()).toFixed(2);

console.log(`TOTAL = R$ ${totalSalary}`);
