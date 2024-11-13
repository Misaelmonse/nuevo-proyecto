function convertirADecimal() {
    const numero = document.getElementById('numero').value;
    const resultadoDiv = document.getElementById('resultado');

    if (/^[01]+$/.test(numero)) { 
        const decimal = parseInt(numero, 2);
        resultadoDiv.textContent = `El número binario ${numero} en decimal es: ${decimal}`;
    } else {
        resultadoDiv.textContent = 'Por favor, ingresa un número binario válido.';
    }
}

function convertirABinario() {
    const numero = document.getElementById('numero').value;
    const resultadoDiv = document.getElementById('resultado');

    if (/^\d+$/.test(numero)) { 
        const binario = parseInt(numero, 10).toString(2);
        resultadoDiv.textContent = `El número decimal ${numero} en binario es: ${binario}`;
    } else {
        resultadoDiv.textContent = 'Por favor, ingresa un número decimal válido.';
    }
}
