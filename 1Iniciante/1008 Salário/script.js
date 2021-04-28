var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var employeeNumber = parseInt(lines.shift());
var workedHours = parseInt(lines.shift());
var hourlyValue = parseFloat(lines.shift());

var employeeSalary = (workedHours * hourlyValue).toFixed(2)

console.log('NUMBER = ' + employeeNumber + '\nSALARY = U$ ' + employeeSalary);
