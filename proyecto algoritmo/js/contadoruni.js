function contarElementos() {
    const texto = document.getElementById('texto').value;
    const resultadoDiv = document.getElementById('resultado');
    
    const totalCaracteres = texto.length;
    const totalVocales = (texto.match(/[aeiouáéíóúü]/gi) || []).length;
    const totalSignos = (texto.match(/[.,;:!?"'¿¡]/g) || []).length;
    const totalEspacios = (texto.match(/\s/g) || []).length;
    const totalPalabras = (texto.match(/\b\w+\b/g) || []).length;
    const totalDigitos = (texto.match(/\d/g) || []).length;

    resultadoDiv.innerHTML = `
        <p>Total de caracteres: ${totalCaracteres}</p>
        <p>Total de vocales: ${totalVocales}</p>
        <p>Total de signos: ${totalSignos}</p>
        <p>Total de espacios: ${totalEspacios}</p>
        <p>Total de palabras: ${totalPalabras}</p>
        <p>Total de dígitos: ${totalDigitos}</p>
    `;
}
