function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) throw new Error("No se puede dividir entre cero.");
  return a / b;
}

function potencia(a, b) {
  return a ** b;
}

function divisionEntera(a, b) {
  if (b === 0) throw new Error("No se puede dividir entre cero.");
  return Math.floor(a / b);
}

    module.exports = {
        multiplicar,
        dividir,
        potencia,
        divisionEntera
};
