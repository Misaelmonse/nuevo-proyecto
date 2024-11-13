function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function obtenerPrimos() {
    const arregloInput = document.getElementById("arreglo").value;
    const numeros = arregloInput.split(',').map(num => parseInt(num.trim())); 
    const primos = numeros.filter(esPrimo); 

    const resultadoDiv = document.getElementById("resultado");
    if (primos.length > 0) {
        resultadoDiv.textContent = "Números primos en el arreglo: " + primos.join(', ');
    } else {
        resultadoDiv.textContent = "No se encontraron números primos en el arreglo ingresado.";
    }
}
