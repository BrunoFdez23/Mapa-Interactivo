var img_madera = 'https://cdn-icons-png.flaticon.com/512/3275/3275748.png';
var img_metal = 'https://www.econtenedores.com/wp-content/uploads/2020/03/metal.png';
var img_organicos = 'https://www.econtenedores.com/wp-content/uploads/2020/03/organico.png';
var img_sanitarios = 'https://www.econtenedores.com/wp-content/uploads/2020/03/inorganicos.png';
var img_dificil_reclaje ='https://www.econtenedores.com/wp-content/uploads/2020/03/inorganico.png'; 
var img_papel = 'https://www.econtenedores.com/wp-content/uploads/2020/03/papel.png';
var img_vidrio = 'https://www.econtenedores.com/wp-content/uploads/2020/03/vidrio.png';
var img_plasticos = 'https://www.econtenedores.com/wp-content/uploads/2020/03/plastico.png';
var img_inorganicos = img_dificil_reclaje;

function mostrarCuadroTexto(texto, imagenes, informacionAdicional, bote) {
  var cuadroTexto = document.getElementById('cuadroTexto');
  var textoCuadro = document.getElementById('textoCuadro');
  var imagenCuadro = document.getElementById('imagenCuadro');
  var informacionCuadro = document.getElementById('informacionCuadro');

  textoCuadro.innerHTML = texto;
  imagenCuadro.innerHTML = '';


  for (var i = 0; i < imagenes.length; i++) {
      var nuevaImagen = document.createElement('img');
      nuevaImagen.src = imagenes[i];
      if(bote==false){
        nuevaImagen.alt = 'Imagen del cuadro';
        nuevaImagen.style.width = '100%'; 
        nuevaImagen.style.height = '100%'; 
        
      }else{        
        nuevaImagen.alt = 'Iconos del cuadro';
        nuevaImagen.style.width = '25%'; 
        nuevaImagen.style.height = '25%'; 
        
      }
      
      imagenCuadro.appendChild(nuevaImagen);
  }
  informacionCuadro.innerHTML = informacionAdicional;

  

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
