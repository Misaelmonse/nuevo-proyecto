function generarFibonacci() {
    let numero = parseInt(document.getElementById("numero").value);

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, ingresa un número entero positivo.");
        return;
    }

    let a = 0, b = 1;
    let resultado = [];

    for (let i = 1; i <= numero; i++) {
        resultado.push(a);
        let siguiente = a + b;
        a = b;
        b = siguiente;
    }

    document.getElementById("resultado").innerHTML = "Secuencia de Fibonacci: " + resultado.join(", ");
}
