function calcularEstadisticas() {
    const inputCalificaciones = document.getElementById("inputCalificaciones").value;
    const calificaciones = inputCalificaciones.split(",").map(Number);

    if (calificaciones.length === 0 || isNaN(calificaciones[0])) {
        alert("Por favor, ingresa calificaciones válidas.");
        return;
    }

   
    const promedio = calificaciones.reduce((a, b) => a + b) / calificaciones.length;

    
    const calificacionMaxima = Math.max(...calificaciones);
    const calificacionMinima = Math.min(...calificaciones);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <h2>Estadísticas de Calificaciones</h2>
        <p>Promedio: ${promedio.toFixed(2)}</p>
        <p>Calificación más alta: ${calificacionMaxima}</p>
        <p>Calificación más baja: ${calificacionMinima}</p>
    `;
}
