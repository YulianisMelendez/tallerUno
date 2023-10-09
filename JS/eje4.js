function generarTabla() {
    let numero = parseInt(document.getElementById('numero').value);
    let filas = parseInt(document.getElementById('filas').value);

    if (isNaN(numero) || isNaN(filas)) {
        alert('Por favor, ingrese números válidos.');
        return;
    }

    let tabla = '<table><thead><tr><th>Multiplicando</th><th>Multiplicador</th><th>Resultado</th></tr></thead><tbody>';

    for (let i = 1; i <= filas; i++) {
        let resultado = numero * i;
        tabla += `<tr><td>${numero}</td><td>${i}</td><td>${resultado}</td></tr>`;
    }

    tabla += '</tbody></table>';
    document.getElementById('tabla').innerHTML = tabla;
}