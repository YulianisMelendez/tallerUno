function calcularEstadistica() {
    let numerosEstadistica = document.getElementById('numerosEstadistica').value;
    let numeros = numerosEstadistica.split(',').map(parseFloat);

    let media = calcularMedia(numeros);
    let mediana = calcularMediana(numeros);
    let desviacion = calcularDesviacion(numeros, media);

    document.getElementById('media').textContent = media.toFixed(2);
    document.getElementById('mediana').textContent = mediana.toFixed(2);
    document.getElementById('desviacion').textContent = desviacion.toFixed(2);
}

function calcularMedia(numeros) {
    let suma = numeros.reduce((total, num) => total + num, 0);
    return suma / numeros.length;
}

function calcularMediana(numeros) {
    numeros.sort((a, b) => a - b);
    let medio = Math.floor(numeros.length / 2);

    if (numeros.length % 2 === 0) {
        return (numeros[medio - 1] + numeros[medio]) / 2;
    } else {
        return numeros[medio];
    }
}

function calcularDesviacion(numeros, media) {
    let sumaCuadrados = numeros.reduce((total, num) => total + Math.pow(num - media, 2), 0);
    let varianza = sumaCuadrados / numeros.length;
    return Math.sqrt(varianza);
}