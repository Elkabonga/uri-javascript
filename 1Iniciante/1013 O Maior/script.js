var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const array = lines
  .shift()
  .split(" ", 3)
  .map((x) => +x);

const max = Math.max(...array)

console.log(`${max} eh o maior`)
