function calcularInteres() {
    let capital = parseFloat(document.getElementById('capital').value);
    let tasa = parseFloat(document.getElementById('tasa').value);
    let periodo = parseInt(document.getElementById('periodo').value);

    if (isNaN(capital) || isNaN(tasa) || isNaN(periodo)) {
        alert('Por favor, ingrese números válidos.');
        return;
    }

    let tasaAnual = tasa / 100;
    let dineroFinal = capital * Math.pow(1 + tasaAnual, periodo);

    document.getElementById('resultado').innerText = `El monto final es de $${dineroFinal.toFixed(2)}`;
}
