let miAudio, reproducir, barra, progreso;//Declaramos las variables iguales a los id de las etiquetas html
var  maximo = 600; //relleno de la barra 600 es el máximo
function comienzo(){
    miAudio = document.getElementById("miAudio");//Vinculamos la variable a la id de la etiqueta
    reproducir = document.getElementById("play");
    barra = document.getElementById("barra");
    progreso = document.getElementById("progreso");

    reproducir.addEventListener("click", clicando,false);//Eventos

    barra.addEventListener("click",recorridoBarra,false);//Eventos
}

function clicando(){
    if((miAudio.paused == false) && (miAudio.ended == false)){
        miAudio.pause();
        reproducir.innerHTML = "Play";//Caundo clicamos sobre el botón cambiará el nombre a Pause o play
        
    
    }else{
        miAudio.play();
        reproducir.innerHTML = "Pause";
        
        bucle = setInterval(estado,30); //Bucle para que se vaya actualizando la barra
        
    }
}

function estado(){
    if (miAudio.ended == false){
        var total = parseInt(miAudio.currentTime * maximo / miAudio.duration);//fórmula para saber en qué punto esta el video
        progreso.style.width = total + "px";//modificar el stilo de la barra de progreso
    }
}

function recorridoBarra(posicion){
    
        let ratonX =posicion.pageX - barra.offsetLeft;//Capturamos el evento del ratón
        let nuevoEstado = ratonX * miAudio.duration / maximo;//otra regla de tres

        miAudio.currentTime = nuevoEstado;

        progreso.style.width = ratonX + "px";
    

}

window.addEventListener("load",comienzo,false);
