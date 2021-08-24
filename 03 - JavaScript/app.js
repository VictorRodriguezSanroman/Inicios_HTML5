function ejemplo(){
alert ("tercera forma de incluir código JavaScript");
}

function hola(){
    alert("Hola");
}


function ejecutar(){

    /*************************
     * Por nombre de etiqueta
     *************************/

    /* document.getElementsByTagName("p")[0].onclick = otraForma; *///Por número de párrafos
    
    
    var numeros = document.getElementsByTagName("li");
    for (var i = 0; i < numeros.length; i++){
        numeros[i].onclick = otraForma;//Para recorrer todas las etiquetas li
    }

    /*************************
     * Por nombre de id
     *************************/
    document.getElementById("principal").onclick = otraForma;//Por Id



    /*************************
     * Por nombre de clase
     *************************/
    //document.getElementsByClassName("importante")[0].onclick=otraForma;


    /*************************
     * Donde queremos apuntar
     *************************/

    document.querySelector(".importante").onclick=otraForma;//Esto lo que hace es buscar el primer elemento que tenga la clase importante
    //var elementos = document.querySelectorAll("#segundo p")[0].onclick = distintaForma;//Grupo de etiquetas, seleccionas la que quieres [0] = 1 de un grupo hijo cuyop padre tiene id = segundo
    
    
    var elementos = document.querySelectorAll("#segundo p");
    for (var i = 0 ; i<elementos.length; i++){
        //Para recorrer todo la etiqueta
        elementos[i].onclick = distintaForma;
    }
}
    





function otraForma(){
    alert("Hola");
}

function distintaForma(){
    alert("Hola de nuevo");
}

window.onload = ejecutar;//Para /* que nada más cargar la página haga el evento de la función hola() */