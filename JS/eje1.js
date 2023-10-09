var numeros = Math.floor(Math.random() * 100) + 1;

function adivinar() {
    var acertar = document.getElementById('acertar').value;
    if (acertar == numeros) {
        document.getElementById('titu').innerHTML = "¡Correcto! El número era " + numeros;
    } else if (acertar < numeros) {
        document.getElementById('titu').innerHTML = "¡Más alto!";
    } else if (acertar > numeros) {
        document.getElementById('titu').innerHTML = "¡Más bajo!";
    }
}
