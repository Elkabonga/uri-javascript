var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const sphereRadius = () => Number(lines.shift());

const calculateTheVolume = (a) =>
  ((4 / 3) * 3.14159 * Math.pow(a, 3)).toFixed(3);

console.log(`VOLUME = ${calculateTheVolume(sphereRadius())}`);
