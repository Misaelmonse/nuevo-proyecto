function contarPalabras(frase) {
    return frase.trim().split(/\s+/).length;
}

function compararFrases() {
    const frase1 = document.getElementById('frase1').value;
    const frase2 = document.getElementById('frase2').value;

    const palabrasFrase1 = contarPalabras(frase1);
    const palabrasFrase2 = contarPalabras(frase2);

    let resultado;

    if (palabrasFrase1 > palabrasFrase2) {
        resultado = `La primera frase tiene más palabras (${palabrasFrase1} palabras) que la segunda (${palabrasFrase2} palabras).`;
    } else if (palabrasFrase1 < palabrasFrase2) {
        resultado = `La segunda frase tiene más palabras (${palabrasFrase2} palabras) que la primera (${palabrasFrase1} palabras).`;
    } else {
        resultado = `Ambas frases tienen la misma cantidad de palabras (${palabrasFrase1} palabras).`;
    }

    document.getElementById('resultado').textContent = resultado;
}
