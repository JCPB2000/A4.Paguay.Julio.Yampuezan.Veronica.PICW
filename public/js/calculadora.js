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
  
}