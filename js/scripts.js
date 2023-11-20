var img_madera = 'Images/madera.png';
var img_metal = 'Images/Metal.png';
var img_organicos = 'Images/organicos.png';
var img_sanitarios = 'Images/sanitarios.png';
var img_dificil_reclaje ='Images/dificil_reciclaje.png'; 
var img_papel = 'Images/Papel.png';
var img_vidrio = 'Images/Vidrio.png';
var img_plasticos = 'Images/Plasticos.png';
var img_inorganicos = img_dificil_reclaje;
var img_construccion = 'Images/.png';
var img_peligrosos='Images/Peligrosos.png';
var img_unicel='Images/Unicel.png';
var img_textiles='Images/Textiles.png';

function getRandomPercentage() {
  return (Math.random() * 100).toFixed(2);
}


function mostrarCuadroTexto(texto, imagenes, informacionAdicional, bote) {
  var cuadroTexto = document.getElementById('cuadroTexto');
  var cuadroEstadistica = document.getElementById('estadisticaCuadro');
  var textoCuadro = document.getElementById('textoCuadro');
  var imagenCuadro = document.getElementById('imagenCuadro');
  var informacionCuadro = document.getElementById('informacionCuadro');
  
  textoCuadro.innerHTML = texto;
  imagenCuadro.innerHTML = '';

  ocultarCuadroTexto();
  for (var i = 0; i < imagenes.length; i++) {
      var nuevaImagen = document.createElement('img');
      nuevaImagen.src = imagenes[i];   

      
      if(bote==false){
        nuevaImagen.alt = 'Imagen del cuadro';
        nuevaImagen.style.width = '100%'; 
        nuevaImagen.style.height = '90%'; 
        document.getElementById("imagenCuadro").href = "https://www.google.com.mx/maps/place/CUTONALA+Centro+Universitario+de+Tonal%C3%A1+-+UDG/@20.5664097,-103.2286777,217m/data=!3m1!1e3!4m14!1m7!3m6!1s0x842f4b24202abe73:0xd33161e2e4345862!2sCUTONALA+Centro+Universitario+de+Tonal%C3%A1+-+UDG!8m2!3d20.5666667!4d-103.2286111!16s%2Fg%2F12hy9f77n!3m5!1s0x842f4b24202abe73:0xd33161e2e4345862!8m2!3d20.5666667!4d-103.2286111!16s%2Fg%2F12hy9f77n?entry=ttu";
        
      }else{ 
        
        nuevaImagen.alt = 'Iconos del cuadro';
        nuevaImagen.style.width = '25%'; 
        nuevaImagen.style.height = '25%';           
        cuadroEstadistica.style.display = 'block';
        document.getElementById("imagenCuadro").href = "Others/Infografias.pdf";
      }
      imagenCuadro.appendChild(nuevaImagen);  
  }
  
  informacionCuadro.innerHTML = informacionAdicional; 
  cuadroTexto.style.display = 'block';
  
}


function ocultarCuadroTexto() {
    var cuadroTexto = document.getElementById('cuadroTexto');
    var cuadroEstadistica = document.getElementById('estadisticaCuadro');
    cuadroTexto.style.display = 'none';
    cuadroEstadistica.style.display = 'none';
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


/*------------------*/

   
    var dt= [];
    var c = ['#230f2b', '#f21d41', '#ebebbc','#bce3c5','#82b3ae','#a9b79e'];
    var c2=[];
    
    
    function grafica(e) {
      dt=[];
      for(var i = 0; i < e.length; i++){
        dt[i]=getRandomPercentage();
        c2[i]=c[i];
      }
      
      var ctx = document.getElementById('graficoCircular').getContext('2d');

      if (window.miGraficoCircular) {
        window.miGraficoCircular.destroy();        
        
      }
        var datos = {
            labels: e,
            datasets: [{
                data: dt, 
                backgroundColor: c 
            }]
        };

        
        var opciones = {
            responsive: true,
            maintainAspectRatio: false,
        };        

        window.miGraficoCircular = new Chart(ctx, {
            type: 'doughnut',
            data: datos,
            options: opciones
        });
    };
