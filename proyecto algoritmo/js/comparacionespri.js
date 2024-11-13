const preguntas = [
    {
        pregunta: "¿Cuál es mayor, 8 o 5?",
        opciones: ["8", "5"],
        respuestaCorrecta: "8",
        mensajeCorrecto: "¡Correcto! 8 es mayor que 5.",
        mensajeIncorrecto: "Incorrecto. Intenta de nuevo."
    },
    {
        pregunta: "¿Quién es mayor, Juan de 12 años o María de 14 años?",
        opciones: ["Juan", "María"],
        respuestaCorrecta: "María",
        mensajeCorrecto: "¡Correcto! María es mayor que Juan.",
        mensajeIncorrecto: "Incorrecto. Intenta de nuevo."
    },
    {
        pregunta: "¿Quién es más joven, Pedro de 9 años o Laura de 7 años?",
        opciones: ["Pedro", "Laura"],
        respuestaCorrecta: "Laura",
        mensajeCorrecto: "¡Correcto! Laura es más joven que Pedro.",
        mensajeIncorrecto: "Incorrecto. Intenta de nuevo."
    },
    {
        pregunta: "¿Qué pesa más, 1 kilo de algodón o 1 kilo de cemento?",
        opciones: ["Algodón", "Cemento", "Pesan iguales"],
        respuestaCorrecta: "Pesan iguales",
        mensajeCorrecto: "¡Correcto! Pesan lo mismo.",
        mensajeIncorrecto: "Incorrecto. Recuerda que la diferencia que hay entre un kilo de algodón y un kilo de cemento es el volumen, no el peso.."
    }
];

let preguntaActual = 0;

const preguntaTexto = document.getElementById('pregunta-texto');
const opcionesContainer = document.getElementById('opciones');
const retroalimentacion = document.getElementById('retroalimentacion');
const botonSiguiente = document.getElementById('boton-siguiente');

function cargarPregunta() {
    const pregunta = preguntas[preguntaActual];
    preguntaTexto.textContent = pregunta.pregunta;
    opcionesContainer.innerHTML = ''; 
    retroalimentacion.style.display = 'none';
    botonSiguiente.style.display = 'none';

    pregunta.opciones.forEach(opcion => {
        const boton = document.createElement('button');
        boton.textContent = opcion;
        boton.classList.add('respuesta-btn');
        boton.onclick = () => verificarRespuesta(opcion);
        opcionesContainer.appendChild(boton);
    });
}

function verificarRespuesta(opcionSeleccionada) {
    const pregunta = preguntas[preguntaActual];
    if (opcionSeleccionada === pregunta.respuestaCorrecta) {
        retroalimentacion.textContent = pregunta.mensajeCorrecto;
        retroalimentacion.style.color = "lightgreen";
        botonSiguiente.style.display = 'inline-block';
    } else {
        retroalimentacion.textContent = pregunta.mensajeIncorrecto;
        retroalimentacion.style.color = "red";
    }
    retroalimentacion.style.display = 'block';
}

function siguientePregunta() {
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
        cargarPregunta();
    } else {
        preguntaTexto.textContent = "¡Has completado todos los ejercicios!";
        opcionesContainer.innerHTML = '';
        retroalimentacion.style.display = 'none';
        botonSiguiente.style.display = 'none';
    }
}

window.onload = cargarPregunta;