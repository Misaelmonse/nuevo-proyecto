function calcularSuma() {
    let numero = document.getElementById("numero-input").value;

    if (numero <= 0 || isNaN(numero)) {
        alert("Por favor, ingresa un número entero positivo.");
        return;
    }

    let suma = 0;

    for (let i = 1; i <= numero; i++) {
        suma += i;
    }

    document.getElementById("resultado").innerText = `La suma de los primeros ${numero} números naturales es: ${suma}`;
}
