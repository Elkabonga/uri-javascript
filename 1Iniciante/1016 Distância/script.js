var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const numberOfMinutes = () => (60 * input) / 30;

numberOfMinutes() === 0
  ? console.log(`0 minuto`)
  : console.log(`${numberOfMinutes()} minutos`);
