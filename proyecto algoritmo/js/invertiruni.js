function invertirTexto() {
    const cadena = document.getElementById('cadena').value;
    const textoInvertido = cadena.split('').reverse().join('');
    document.getElementById('resultado').textContent = "Texto invertido: " + textoInvertido;
}
