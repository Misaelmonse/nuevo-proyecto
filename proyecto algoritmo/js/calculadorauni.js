let operacionActual = '';
let resultado = '';

function agregarNumero(numero) {
    if (resultado) {
        operacionActual = resultado; 
        resultado = '';
    }
    operacionActual += numero;
    document.getElementById('resultado').value = operacionActual || '0'; 
}

function realizarOperacion(operador) {
    if (resultado) {
        operacionActual = resultado; 
        resultado = '';
    }
    operacionActual += ` ${operador} `;
    document.getElementById('resultado').value = operacionActual; 
}

function calcularResultado() {
    try {
        resultado = eval(operacionActual);
        document.getElementById('resultado').value = resultado; 
        operacionActual = ''; 
    } catch (error) {
        document.getElementById('resultado').value = 'Error'; 
        operacionActual = '';
    }
}

function limpiar() {
    operacionActual = '';
    resultado = '';
    document.getElementById('resultado').value = '0'; 
}
