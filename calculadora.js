const readline = require("readline");
const {
  multiplicar,
  dividir,
  potencia,
  divisionEntera
} = require("./operaciones");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function preguntar(mensaje) {
  return new Promise((resolve) => rl.question(mensaje, resolve));
}

async function main() {
  try {
    const num1 = await preguntar("Ingrese el primer número: ");
    const num2 = await preguntar("Ingrese el segundo número: ");
    const operador = await preguntar("Ingrese el operador ( /, *, **, //): ");

    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      throw new Error("Ambas entradas deben ser números.");
    }

    let resultado;

    if (operador === "*") {
      resultado = multiplicar(a, b);
    } else if (operador === "/") {
      resultado = dividir(a, b);
    } else if (operador === "**") {
      resultado = potencia(a, b);
    } else if (operador === "//") {
      resultado = divisionEntera(a, b);
    } else {
      throw new Error("Operador inválido. Use uno de: /, *, **, //");
    }

    console.log(`Resultado: ${resultado}`);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    rl.close();
  }
}

main();