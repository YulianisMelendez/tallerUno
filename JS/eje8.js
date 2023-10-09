function generarContrasena() {
    let longitud = parseInt(document.getElementById('longitud').value);

    if (isNaN(longitud) || longitud <= 0) {
        alert('Por favor, ingrese una longitud válida.');
        return;
    }

    let incluirMayusculas = document.getElementById('mayusculas').checked;
    let incluirMinusculas = document.getElementById('minusculas').checked;
    let incluirNumeros = document.getElementById('numeros').checked;
    let incluirEspeciales = document.getElementById('especiales').checked;

    if (!(incluirMayusculas || incluirMinusculas || incluirNumeros || incluirEspeciales)) {
        alert('Por favor, seleccione al menos un tipo de caracter.');
        return;
    }

    let caracteresPermitidos = '';
    if (incluirMayusculas) caracteresPermitidos += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (incluirMinusculas) caracteresPermitidos += 'abcdefghijklmnopqrstuvwxyz';
    if (incluirNumeros) caracteresPermitidos += '0123456789';
    if (incluirEspeciales) caracteresPermitidos += '!@#$%^&*()_+[]{}|;:,.<>?';

    let contra = '';
    for (let i = 0; i < longitud; i++) {
        let indice = Math.floor(Math.random() * caracteresPermitidos.length);
        contra += caracteresPermitidos.charAt(indice);
    }

    document.getElementById('contraseña').innerText = `Contraseña Generada: ${contra}`;
}