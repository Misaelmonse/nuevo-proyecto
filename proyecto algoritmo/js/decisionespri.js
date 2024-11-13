const preguntas = [
    {
        pregunta: "Si hace sol, ¿qué debes llevar?",
        opciones: ["Sombrero", "Guantes"],
        respuestaCorrecta: "Sombrero",
        mensajeCorrecto: "¡Correcto! Debes llevar un sombrero para protegerte del sol.",
        mensajeIncorrecto: "Incorrecto. Los guantes son para el frío, no para el sol."
    },
    {
        pregunta: "¿Qué tiene más superficie, una mesa de 1 m² o una alfombra de 2 m²?",
        opciones: ["Mesa de 1 m²", "Alfombra de 2 m²"],
        respuestaCorrecta: "Alfombra de 2 m²",
        mensajeCorrecto: "¡Correcto! La alfombra de 2 m² tiene más superficie que la mesa de 1 m².",
        mensajeIncorrecto: "Incorrecto. Recuerda que 2 m² es más que 1 m²."
    },
    {
        pregunta: "¿Cuál es menor, un jardín de 10 m² o un balcón de 5 m²?",
        opciones: ["Jardín de 10 m²", "Balcón de 5 m²"],
        respuestaCorrecta: "Balcón de 5 m²",
        mensajeCorrecto: "¡Correcto! El balcón de 5 m² es menor que el jardín de 10 m².",
        mensajeIncorrecto: "Incorrecto. Recuerda que 5 m² es menor que 10 m²."
    },
    {
        pregunta: "¿Qué recipiente puede contener más líquido, un vaso de 250 ml o una botella de 1 litro?",
        opciones: ["Vaso de 250 ml", "Botella de 1 litro"],
        respuestaCorrecta: "Botella de 1 litro",
        mensajeCorrecto: "¡Correcto! Una botella de 1 litro puede contener más líquido que un vaso de 250 ml.",
        mensajeIncorrecto: "Incorrecto. Recuerda que 1 litro son 1000 ml, que es más que 250 ml."
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
    retroalimentacion.style.display = 'block';

    if (opcionSeleccionada === pregunta.respuestaCorrecta) {
        retroalimentacion.textContent = pregunta.mensajeCorrecto;
        retroalimentacion.style.color = "lightgreen";
        botonSiguiente.style.display = 'inline-block';
    } else {
        retroalimentacion.textContent = pregunta.mensajeIncorrecto;
        retroalimentacion.style.color = "red";
        botonSiguiente.style.display = 'none'; 
    }
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
