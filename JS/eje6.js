let libros = [];

        function agregarLibro() {
            let titulo = document.getElementById('titulo').value;
            let autor = document.getElementById('autor').value;
            let año = document.getElementById('año').value;

            libros.push({ titulo: titulo, autor: autor, año: año });

            document.getElementById('titulo').value = '';
            document.getElementById('autor').value = '';
            document.getElementById('año').value = '';
        }

        function buscarLibro() {
            let tituloBusqueda = document.getElementById('tituloBusqueda').value;

            let resultado = libros.filter(libro => libro.titulo === tituloBusqueda);

            if (resultado.length > 0) {
                mostrarResultado(resultado);
            } else {
                document.getElementById('resultado').innerText = 'Libro no encontrado';
            }

            document.getElementById('tituloBusqueda').value = '';
        }

        function mostrarResultado(librosEncontrados) {
            let resultadoHTML = '<h3>Libros Encontrados:</h3>';
            resultadoHTML += '<ul>';

            for (let libro of librosEncontrados) {
                resultadoHTML += `Título: ${libro.titulo}, Autor: ${libro.autor}, Año de Publicación: ${libro.año} `;
            }

            resultadoHTML += '</ul>';
            document.getElementById('resultado').innerHTML = resultadoHTML;
        }
