function calcularParesImpares() {
    let inicio = parseInt(document.getElementById("inicio").value);
    let fin = parseInt(document.getElementById("fin").value);

    if (isNaN(inicio) || isNaN(fin)) {
        alert("Por favor, ingresa dos números enteros válidos.");
        return;
    }

    let pares = [];
    let impares = [];

    if (inicio > fin) {
        [inicio, fin] = [fin, inicio]; 
    }

    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        } else {
            impares.push(i);
        }
    }

    document.getElementById("resultado").innerHTML = `
        <p><strong>Números Pares:</strong> ${pares.join(", ")}</p>
        <p><strong>Números Impares:</strong> ${impares.join(", ")}</p>
    `;
}
