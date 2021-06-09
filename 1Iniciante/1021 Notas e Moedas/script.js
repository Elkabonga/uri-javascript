var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const money = Number(lines.shift()).toFixed(2);

const note = (a, b) => Math.floor(a / b);
const rest = (a, b) => (a % b).toFixed(2);

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

const note00100 = () => note(rest002(), 1);
const rest00100 = () => rest(rest002(), 1);
const note00050 = () => note(rest00100(), 0.5);
const rest00050 = () => rest(rest00100(), 0.5);
const note00025 = () => note(rest00050(), 0.25);
const rest00025 = () => rest(rest00050(), 0.25);
const note00010 = () => note(rest00025(), 0.1);
const rest00010 = () => rest(rest00025(), 0.1);
const note00005 = () => note(rest00010(), 0.05);
const rest00005 = () => rest(rest00010(), 0.05);
const note00001 = () => note(rest00005(), 0.01);

console.log(`NOTAS:
${note100()} nota(s) de R$ 100.00
${note050()} nota(s) de R$ 50.00
${note020()} nota(s) de R$ 20.00
${note010()} nota(s) de R$ 10.00
${note005()} nota(s) de R$ 5.00
${note002()} nota(s) de R$ 2.00
MOEDAS:
${note00100()} moeda(s) de R$ 1.00
${note00050()} moeda(s) de R$ 0.50
${note00025()} moeda(s) de R$ 0.25
${note00010()} moeda(s) de R$ 0.10
${note00005()} moeda(s) de R$ 0.05
${note00001()} moeda(s) de R$ 0.01`);
