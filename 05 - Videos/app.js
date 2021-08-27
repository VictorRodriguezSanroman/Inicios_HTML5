let miVideo, reproducir, barra, progreso;//Declaramos las variables iguales a los id de las etiquetas html
var  maximo = 600; //relleno de la barra 600 es el máximo
function comienzo(){
    miVideo = document.getElementById("miVideo");//Vinculamos la variable a la id de la etiqueta
    reproducir = document.getElementById("reproducir");
    barra = document.getElementById("barra");
    progreso = document.getElementById("progreso");

    reproducir.addEventListener("click", clicando,false);//Eventos

    barra.addEventListener("click",recorridoBarra,false);//Eventos
}

function clicando(){
    if((miVideo.paused == false) && (miVideo.ended == false)){
        miVideo.pause();
        reproducir.innerHTML = "Play";//Caundo clicamos sobre el botón cambiará el nombre a Pause o play
        
    
    }else{
        miVideo.play();
        reproducir.innerHTML = "Pause";
        
        bucle = setInterval(estado,30); //Bucle para que se vaya actualizando la barra
        
    }
}

function estado(){
    if (miVideo.ended == false){
        var total = parseInt(miVideo.currentTime * maximo / miVideo.duration);//fórmula para saber en qué punto esta el video
        progreso.style.width = total + "px";//modificar el stilo de la barra de progreso
    }
}

function recorridoBarra(posicion){
    
        let ratonX =posicion.pageX - barra.offsetLeft;//Capturamos el evento del ratón
        let nuevoEstado = ratonX * miVideo.duration / maximo;//otra regla de tres

        miVideo.currentTime = nuevoEstado;

        progreso.style.width = ratonX + "px";
    

}

window.addEventListener("load",comienzo,false);
