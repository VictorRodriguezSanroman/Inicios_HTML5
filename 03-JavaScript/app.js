function ejemplo(){
alert ("tercera forma de incluir c�digo JavaScript");
}

function hola(){
    alert("Hola");
}


function ejecutar(){

    for (var i = 0; i < ("li".length + 1); i++){
        document.getElementsByTagName("li")[i].onclick = otraForma;//Para recorrer todas las etiquetas li
    }
    document.getElementsByClassName("importante")[0].onclick=otraForma;
    /* document.getElementsByTagName("p")[0].onclick = otraForma; *///Por n�mero de p�rrafos
    document.getElementById("principal").onclick = otraForma;//Por Id
}

function otraForma(){
    alert("Hola");
}

window.onload = ejecutar;//Para /* que nada m�s cargar la p�gina haga el evento de la funci�n hola() */