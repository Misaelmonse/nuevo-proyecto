function generarTabla() {
    let numero = parseInt(document.getElementById("numero").value);
    let tipoTabla = document.getElementById("tipo-tabla").value;

    if (isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    let resultado = '';

    for (let i = 1; i <= 10; i++) {
        if (tipoTabla === "multiplicar") {
            resultado += `<p>${numero} x ${i} = ${numero * i}</p>`;
        } else if (tipoTabla === "sumar") {
            resultado += `<p>${numero} + ${i} = ${numero + i}</p>`;
        }
    }

    document.getElementById("resultado").innerHTML = resultado;
}
