const preguntas = [
    { texto: "¿Qué número sigue en la secuencia 2, 4, 6, ...?", opciones: [8, 7, 10, 9], correcta: 8 },
    { texto: "¿Cuál es el patrón en la secuencia 5, 10, 15, ...?", opciones: ["+5", "+2", "x2", "+10"], correcta: "+5" },
    { texto: "¿Qué número sigue en la secuencia 10, 20, 30, ...?", opciones: [40, 25, 35, 45], correcta: 40 },
    { texto: "¿Cuál es el patrón en la secuencia 2, 4, 8, 16, ...?", opciones: ["x2", "+2", "x3", "+4"], correcta: "x2" }
]
let preguntaActual = 0;

function cargarPregunta() {
    const preguntaTexto = document.getElementById('pregunta-texto');
    const opcionesContainer = document.getElementById('opciones');
    const retroalimentacion = document.getElementById('retroalimentacion');
    const botonSiguiente = document.getElementById('boton-siguiente');

    preguntaTexto.textContent = preguntas[preguntaActual].texto;
    opcionesContainer.innerHTML = '';
    retroalimentacion.style.display = 'none';
    botonSiguiente.style.display = 'none';

    preguntas[preguntaActual].opciones.forEach(opcion => {
        const boton = document.createElement('button');
        boton.textContent = opcion;
        boton.classList.add('respuesta-btn');
        boton.onclick = () => verificarRespuesta(opcion);
        opcionesContainer.appendChild(boton);
    });
}

function verificarRespuesta(respuesta) {
    const retroalimentacion = document.getElementById('retroalimentacion');
    const botonSiguiente = document.getElementById('boton-siguiente');

    if (respuesta === preguntas[preguntaActual].correcta) {
        retroalimentacion.textContent = "¡Correcto! Bien hecho.";
        retroalimentacion.style.color = "lightgreen";
        botonSiguiente.style.display = "inline";
    } else {
        retroalimentacion.textContent = "Incorrecto. Inténtalo de nuevo.";
        retroalimentacion.style.color = "red";
    }
    retroalimentacion.style.display = "block";
}

function siguientePregunta() {
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
        cargarPregunta();
    } else {
        alert("¡Has completado todos los ejercicios!");
        preguntaActual = 0;
        cargarPregunta();
    }
}

cargarPregunta();