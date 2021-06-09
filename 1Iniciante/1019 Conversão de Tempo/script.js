var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const time = Number(lines.shift());

const hours = () => Math.floor(time / 3600);

const restHours = () => time % 3600;
const minutes = () => Math.floor(restHours() / 60);

const seconds = () => restHours() % 60;

console.log(`${hours()}:${minutes()}:${seconds()}`);
