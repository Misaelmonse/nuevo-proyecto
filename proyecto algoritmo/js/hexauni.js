function convertirABinario() {
    const numero = document.getElementById('numero').value;
    const resultadoDiv = document.getElementById('resultado');

    if (/^[0-9a-fA-F]+$/.test(numero)) { 
        const decimal = parseInt(numero, 16);
        const binario = decimal.toString(2);
        resultadoDiv.textContent = `El número ${numero} en binario es: ${binario}`;
    } else {
        resultadoDiv.textContent = 'Por favor, ingresa un número hexadecimal válido.';
    }
}

function convertirAHexadecimal() {
    const numero = document.getElementById('numero').value;
    const resultadoDiv = document.getElementById('resultado');

    if (/^[01]+$/.test(numero)) { 
        const decimal = parseInt(numero, 2);
        const hexadecimal = decimal.toString(16).toUpperCase();
        resultadoDiv.textContent = `El número ${numero} en hexadecimal es: ${hexadecimal}`;
    } else {
        resultadoDiv.textContent = 'Por favor, ingresa un número binario válido.';
    }
}
