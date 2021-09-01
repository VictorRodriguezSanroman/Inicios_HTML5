
function comenzar(){
    let elemento = document.getElementById("lienzo");

    lienzo = elemento.getContext("2d"); //PARA ESPECIFICARLE EN QUE FORMATO QUEREMOS QUE SE HAGA EL DIBUJO

    /*
    lienzo.fillStyle = "blue"; //El color se deber poner siempre antes del dibujo

     lienzo.fillRect(110,60, 200, 200);//Dibujar un rectangulo dentro de nuestro lienzo

     
    lienzo.strokeStyle = "blue"; //Igual para el color del contorno
    // lienzo.strokeRect(110,110, 100, 100);//Dibuja solo el contorno del rectángulo

    // lienzo.clearRect(130,130, 50, 50); //borrar contenido */

    lienzo.strokeStyle = "blue";

    lienzo.fillStyle = "green";

    lienzo.globalAlpha = 0.4; //Darle transparencia al global

    lienzo.strokeRect (100,100,120,120);
       
    lienzo.fillRect(110,110,100,100);

    lienzo.clearRect (120,120,80,80);
}

























window.addEventListener("load", comenzar,false);