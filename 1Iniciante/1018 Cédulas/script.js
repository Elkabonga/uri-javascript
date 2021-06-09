var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const money = Number(lines.shift());

const note = (a, b) => Math.floor(a / b);
const rest = (a, b) => Math.floor(a % b);

const note100 = () => note(money, 100);
const rest100 = () => rest(money, 100);
const note050 = () => note(rest100(), 50);
const rest050 = () => rest(rest100(), 50);
const note020 = () => note(rest050(), 20);
const rest020 = () => rest(rest050(), 20);
const note010 = () => note(rest020(), 10);
const rest010 = () => rest(rest020(), 10);
const note005 = () => note(rest010(), 5);
const rest005 = () => rest(rest010(), 5);
const note002 = () => note(rest005(), 2);
const rest002 = () => rest(rest005(), 2);
const note001 = () => note(rest002(), 1);

console.log(money);
console.log(`${note100()} nota(s) de R$ 100,00`);
console.log(`${note050()} nota(s) de R$ 50,00`);
console.log(`${note020()} nota(s) de R$ 20,00`);
console.log(`${note010()} nota(s) de R$ 10,00`);
console.log(`${note005()} nota(s) de R$ 5,00`);
console.log(`${note002()} nota(s) de R$ 2,00`);
console.log(`${note001()} nota(s) de R$ 1,00`);
