function mostrarCuadroTexto(texto, imagen) {
    var cuadroTexto = document.getElementById('cuadroTexto');
    var textoCuadro = document.getElementById('textoCuadro');
    var imagenCuadro = document.getElementById('imagenCuadro');

    textoCuadro.innerHTML = texto;
    imagenCuadro.src = imagen;

    cuadroTexto.style.display = 'block';



  }

function ocultarCuadroTexto() {
    var cuadroTexto = document.getElementById('cuadroTexto');
    cuadroTexto.style.display = 'none';
}

