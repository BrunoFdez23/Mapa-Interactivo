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

var contenedor = document.getElementById('main_container');
var zoomable = document.getElementById('mapa_int');

var escalaOriginal = 1;
var escala = escalaOriginal;
var offsetX = 0;
var offsetY = 0;
var dragging = false;

contenedor.addEventListener('wheel', function (e) {
  e.preventDefault();

  var delta = e.deltaY || e.detail || e.wheelDelta;

  if (delta > 0) {
    
    if (escala > escalaOriginal) {
      escala -= 0.1;
    }
  } else {
    escala += 0.1;
  }

  escala = Math.min(Math.max(escala, 0.5), 2);

  zoomable.style.transform = 'scale(' + escala + ')';
});

zoomable.addEventListener('mousedown', function (e) {
  e.preventDefault();
  dragging = true;
  offsetX = e.clientX - zoomable.getBoundingClientRect().left;
  offsetY = e.clientY - zoomable.getBoundingClientRect().top;
  zoomable.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', function (e) {
  if (dragging) {
    var x = e.clientX - offsetX;
    var y = e.clientY - offsetY;

    
    x = Math.min(Math.max(x, 0), contenedor.clientWidth - zoomable.clientWidth);
    y = Math.min(Math.max(y, 0), contenedor.clientHeight - zoomable.clientHeight);

    zoomable.style.left = x + 'px';
    zoomable.style.top = y + 'px';
  }
});

document.addEventListener('mouseup', function () {
  dragging = false;
  zoomable.style.cursor = 'grab';
});
