var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const input1 = Number(lines.shift());
const input2 = Number(lines.shift());

const averageConsumption = () => (input1 / input2).toFixed(3);

console.log(`${averageConsumption()} km/l`);
