function calcularFactorial() {
    let numero = document.getElementById("numero-input").value;

    if (numero <= 0 || isNaN(numero)) {
        alert("Por favor, ingresa un número entero positivo.");
        return;
    }

    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    document.getElementById("resultado").innerText = `El factorial de ${numero} es: ${factorial}`;
}
