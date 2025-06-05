let operacion = "";

function seleccionarOperacion(op) {
  operacion = op;

  let resultado = document.getElementById("resultado_final");
  resultado.textContent = "OPERACIÓN SELECCIONADA: " + op;

  // Limpiar los campos para ingresar el segundo número
  document.getElementById("txt_numero").disabled = true;
}

function calcularResultado() {
  let numero1 = document.getElementById("txt_numero").value;
  let numero2 = document.getElementById("txt_numero_2").value;

  let resultado = document.getElementById("resultado_final");
  if (numero1 === "" || numero2 === "") {
    resultado.textContent = "Debe ingresar ambos números.";
    return;
  }
  

  let n1 = parseFloat(numero1);
  let n2 = parseFloat(numero2);
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
    resultado.textContent = "Debe seleccionar una operación.";
    return;
  }

  resultado.textContent = "RESULTADO: " + total;
 }
 function limpiar() {

}