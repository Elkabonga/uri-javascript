var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const employeeNumber = parseInt(lines.shift());
const workedHours = parseInt(lines.shift());
const hourlyValue = parseFloat(lines.shift());

const employeeSalary = () => (workedHours * hourlyValue).toFixed(2);

console.log(`NUMBER = ${employeeNumber}
SALARY = U$ ${employeeSalary()}`);
