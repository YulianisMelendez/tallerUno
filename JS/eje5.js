let preguntas = [
    { pregunta: "¿Cuántos minutos tiene una hora?", respuesta: "60 minutos" },
    { pregunta: "¿Cuál es el río más largo del mundo?", respuesta: "Rio Amazonas" },
    { pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?", respuesta: "1939" },
    { pregunta: "¿Cuál es la montaña más alta del mundo?", respuesta: "El Monte Everest" },
    { pregunta: "¿Cuántas patas tiene una araña?", respuesta: "8 patas" }
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