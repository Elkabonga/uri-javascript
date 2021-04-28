var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var sellersName = lines.shift();
var fixedSalary = parseInt(lines.shift());
var totalSalesMonth = parseFloat(lines.shift());



console.log('TOTAL = R$ ' + totalSalesMonth);
