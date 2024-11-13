function calcularPromedio(notas) {
    const sumaNotas = notas.reduce((acc, nota) => acc + nota, 0); 
    return sumaNotas / notas.length; 
}

function calcularModa(notas) {
    const frecuencia = {}; 
    let maxFrecuencia = 0;
    let moda = [];

    for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];
        frecuencia[nota] = (frecuencia[nota] || 0) + 1;
        if (frecuencia[nota] > maxFrecuencia) {
            maxFrecuencia = frecuencia[nota];
        }
    }

    for (let nota in frecuencia) {
        if (frecuencia[nota] === maxFrecuencia) {
            moda.push(Number(nota)); 
        }
    }

    return moda;
}

function obtenerPromedioYModa() {
    const arregloInput = document.getElementById("notas").value;

    const notas = arregloInput.split(',').map(num => parseFloat(num.trim())); 

    if (notas.length === 0 || notas.some(isNaN)) {
        document.getElementById("resultado").textContent = "Por favor, ingresa un conjunto válido de notas.";
        return;
    }

    const promedio = calcularPromedio(notas);
    const moda = calcularModa(notas);

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<strong>Promedio:</strong> ${promedio.toFixed(2)} <br> 
                              <strong>Moda:</strong> ${moda.length > 1 ? "Varios valores (" + moda.join(', ') + ")" : moda[0]}`;
}
