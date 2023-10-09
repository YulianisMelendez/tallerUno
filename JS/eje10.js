function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Ingresa valores válidos para peso y altura.");
        return;
    }

    const imc = peso / (altura * altura);
    const resultado = document.getElementById("resultado");

    resultado.style.display = "block";

    let mensaje = "";
    if (imc < 18.5) {
        mensaje = "Estás en el rango de Peso bajo";
    } else if (imc < 24.9) {
        mensaje = "Estás en el rango de Peso normal";
    } else if (imc < 29.9) {
        mensaje = "Estás en el rango de Sobrepeso";
    } else {
        mensaje = "Estás en el rango de Obesidad";
    }

    resultado.innerHTML = `
        <h2>Tu IMC es: ${imc.toFixed(2)}</h2>
        <p>Resultado: ${mensaje}</p>
    `;
}
