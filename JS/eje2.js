let estudiantes = {};

function agregarEstudiante() {
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let id = document.getElementById('id').value;

    estudiantes[id] = {
        nombre: nombre,
        edad: edad,
        id: id
    };

    document.getElementById('nombre').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('id').value = '';
}

function buscarEstudiante() {
    let buscarId = document.getElementById('buscarId').value;

    if (estudiantes[buscarId]) {
        let estudiante = estudiantes[buscarId];
        let resultado = "Nombre: " + estudiante.nombre + ", Edad: " + estudiante.edad + ", Número de Identificación: " + estudiante.id;
        document.getElementById('resultado').innerText = resultado;
    } else {
        document.getElementById('resultado').innerText = 'Estudiante no encontrado';
    }

    document.getElementById('buscarId').value = '';
}
