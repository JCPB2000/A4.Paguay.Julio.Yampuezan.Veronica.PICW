// Variables globales para almacenar operación y primer número
let operacion = "";
let primerNumero = "";

// Función para añadir dígitos a la pantalla
function agregarNumero(valor) {
  const pantalla = document.getElementById("pantalla");
  pantalla.value += valor;
}
  // Función que guarda la operación y limpia la pantalla para el segundo número
function seleccionarOperacion(op) {
  primerNumero = document.getElementById("pantalla").value;
  operacion = op;
  document.getElementById("pantalla").value = "";
  document.getElementById("resultado_final").textContent = "Operación: " + op;
}

function calcularResultado() {
  let segundoNumero = document.getElementById("pantalla").value;
  let resultado = document.getElementById("resultado_final");

  // Validación si los números están vacíos
  if (primerNumero === "" || segundoNumero === "") {
    resultado.textContent = "Faltan números.";
    return;
  }

  let n1 = parseFloat(primerNumero);
  let n2 = parseFloat(segundoNumero);
  let total;

  // Estructura condicional para cada operación matemática
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
// Muestra el resultado en pantalla
  document.getElementById("pantalla").value = total;
  resultado.textContent = "Resultado: " + total;
}

// Función para limpiar la pantalla y reiniciar las variables
function limpiar() {
  document.getElementById("pantalla").value = "";
  document.getElementById("resultado_final").textContent = "";
  operacion = "";
  primerNumero = "";
}
