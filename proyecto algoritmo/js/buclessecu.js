let preguntas = [
    {
        texto: "¿Cuántas veces se repite el número 3 en la secuencia 3, 6, 9, 3, 12, 3, 15?",
        respuestaCorrecta: 3
    },
    {
        texto: "¿Cuántas veces se repite el número 5 en la secuencia 5, 10, 5, 20, 5?",
        respuestaCorrecta: 3
    },
    {
        texto: "¿Cuántas veces se repite el número 7 en la secuencia 7, 14, 21?",
        respuestaCorrecta: 1
    }
];

let preguntaActual = 0;

function verificarRespuesta(respuestaSeleccionada) {
    const feedback = document.getElementById("retroalimentacion");
    
    if (respuestaSeleccionada === preguntas[preguntaActual].respuestaCorrecta) {
        feedback.textContent = "¡Correcto! Has identificado correctamente las repeticiones.";
        feedback.style.color = "green";  
    } else {
        feedback.textContent = "Incorrecto. Intenta de nuevo.";
        feedback.style.color = "red";  
    }
}

function siguientePregunta() {
    preguntaActual++;
    
    if (preguntaActual < preguntas.length) {
        cargarPregunta();
        document.getElementById("retroalimentacion").textContent = ""; 
    } else {
        document.getElementById("pregunta-texto").textContent = "¡Has completado todas las preguntas!";
        document.getElementById("opciones").style.display = "none"; 
        document.getElementById("boton-siguiente").style.display = "none"; 
    }
}

function cargarPregunta() {
    const preguntaTexto = document.getElementById("pregunta-texto");
    preguntaTexto.textContent = preguntas[preguntaActual].texto;

    const opcionesDiv = document.getElementById("opciones");
    opcionesDiv.innerHTML = ''; 

    const opciones = [
        `${preguntas[preguntaActual].respuestaCorrecta - 1} vez${preguntas[preguntaActual].respuestaCorrecta > 2 ? '' : ''}`,
        `${preguntas[preguntaActual].respuestaCorrecta} vez${preguntas[preguntaActual].respuestaCorrecta > 2 ? '' : ''}`,
        `${preguntas[preguntaActual].respuestaCorrecta + 1} vez${preguntas[preguntaActual].respuestaCorrecta > 2 ? '' : ''}`,
        `${preguntas[preguntaActual].respuestaCorrecta + 2} vez${preguntas[preguntaActual].respuestaCorrecta > 2 ? '' : ''}`
    ];

    opciones.sort(() => Math.random() - 0.5);  

    opciones.forEach(opcion => {
        const button = document.createElement("button");
        button.textContent = opcion;
        button.onclick = () => verificarRespuesta(parseInt(opcion));
        opcionesDiv.appendChild(button);
    });
}

cargarPregunta();
