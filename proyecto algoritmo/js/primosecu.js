function verificarPrimo() {
    let numero = parseInt(document.getElementById("numero").value);

    if (isNaN(numero) || numero <= 1) {
        alert("Por favor, ingresa un número entero positivo mayor a 1.");
        return;
    }

    let esPrimo = true;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        document.getElementById("resultado").innerHTML = `${numero} es un número primo.`;
    } else {
        document.getElementById("resultado").innerHTML = `${numero} no es un número primo.`;
    }
}
