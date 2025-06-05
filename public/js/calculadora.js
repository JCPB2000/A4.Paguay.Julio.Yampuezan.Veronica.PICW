let operacion = "";
let primerNumero = "";

function agregarNumero(valor) {
  const pantalla = document.getElementById("pantalla");
  pantalla.value += valor;
}

function seleccionarOperacion(op) {
  primerNumero = document.getElementById("pantalla").value;
  operacion = op;
  document.getElementById("pantalla").value = "";
  document.getElementById("resultado_final").textContent = "Operación: " + op;
}

function calcularResultado() {
  let segundoNumero = document.getElementById("pantalla").value;
  let resultado = document.getElementById("resultado_final");

  if (primerNumero === "" || segundoNumero === "") {
    resultado.textContent = "Faltan números.";
    return;
  }

  let n1 = parseFloat(primerNumero);
  let n2 = parseFloat(segundoNumero);
  let total;

  if (operacion === "+") {
    total = n1 + n2;
  } else if (operacion === "-") {
    total = n1 - n2;
  } else if (operacion === "*") {
    total = n1 * n2;
  } else if (operacion === "/") {
    if (n2 === 0) {
      resultado.textContent = "No se puede dividir por cero.";
      return;
    }
    total = n1 / n2;
  } else {
    resultado.textContent = "Selecciona una operación.";
    return;
  }

  document.getElementById("pantalla").value = total;
  resultado.textContent = "Resultado: " + total;
}

function limpiar() {
  document.getElementById("pantalla").value = "";
  document.getElementById("resultado_final").textContent = "";
  operacion = "";
  primerNumero = "";
}
