var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const radius = lines
  .shift()
  .split(" ", 3)
  .map((x) => +x);

const triangleCalculation = (a, b) => ((a * b) / 2).toFixed(3);

const circleCalculation = (a) => (3.14159 * a * a).toFixed(3);

const trapezoidCalculus = (a, b, c) => (((a + b) * c) / 2).toFixed(3);

const squareCalculation = (a) => (a * a).toFixed(3);

const rectangleCalculation = (a, b) => (a * b).toFixed(3);

console.log(`TRIANGULO: ${triangleCalculation(radius[0], radius[2])}
CIRCULO: ${circleCalculation(radius[2])}
TRAPEZIO: ${trapezoidCalculus(radius[0], radius[1], radius[2])}
QUADRADO: ${squareCalculation(radius[1])}
RETANGULO: ${rectangleCalculation(radius[0], radius[1])}`);
