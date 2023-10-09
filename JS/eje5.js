let preguntas = [
    { pregunta: "¿Cuál es el elemento químico más abundante en la Tierra?", respuesta: "El oxigeno" },
    { pregunta: "¿Cuál es el río más largo del mundo?", respuesta: "El rio Amazonas" },
    { pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?", respuesta: "1939" },
    { pregunta: "¿Cuál es la montaña más alta del mundo?", respuesta: "El Monte Everest" },
    { pregunta: "¿Cuál es el país más grande del mundo por superficie?", respuesta: "Rusia" }
];

let puntuacion = 0;
let preguntaActual = 0;

function verificarRespuesta() {
    let respuestaUsuario = document.getElementById('respuesta').value;
    let respuestaCorrecta = preguntas[preguntaActual].respuesta;

    if (respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
        puntuacion++;
    }

    preguntaActual++;

    if (preguntaActual < preguntas.length) {
        document.getElementById('textoPregunta').textContent = preguntas[preguntaActual].pregunta;
        document.getElementById('respuesta').value = '';
    } else {
        mostrarPuntuacion();
    }
}

function mostrarPuntuacion() {
    document.getElementById('pregunta').style.display = 'none';
    document.getElementById('puntuacion').innerText = `Puntuación: ${puntuacion} de ${preguntas.length} respuestas correctas`;
}