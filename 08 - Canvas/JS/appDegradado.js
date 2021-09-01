function comenzar(){
    let elemento = document.getElementById("lienzo");

    lienzo = elemento.getContext("2d");

    let degradado;
    
    degradado = lienzo.createLinearGradient(0,150,500,150); //Método para crear el degradado lineal mediante coordenadas

    degradado = lienzo.createRadialGradient(250,150,50,250,150,300);//Degradado circular Se deben poner las coordenadas de 2 circulos 
                                                                        /* Primer número es para el centro en coordenadas x 
                                                                        y el segundo el centro en coordenadas y, 
                                                                        el tercer numero pertenece al radio del circulo */

    degradado.addColorStop(1,"blue");//añadimos el color, el número representa donde queremos que empiece de 0 hasta 1
    degradado.addColorStop(0,"green");

    lienzo.fillStyle = degradado;//Rellenamos el canvas (en nuestro caso lo hemos llamado lienzo)


    lienzo.fillRect(0,0,500,300);//Creamos la figura y así veremos el degradado (Tan grande como el lienzo, si no solo se verá una parte del lienzo)


}

window.addEventListener("load",comenzar,false);