var edad;
function comenzar(){
    edad = document.getElementById("miEdad");
    edad.addEventListener("change",cambia_rango,false);

    document.datos_usuario.addEventListener("invalid",validar, true);//True por que esta vez si que habrá un dato dado

    document.getElementById("enviar").addEventListener("click",enviar,false);

    document.datos_usuario.addEventListener("input",validarTiempoReal,false);

}

function cambia_rango(){

    var salida = document.getElementById("rango");

    var calculo = edad.value - 30;

    if(calculo < 30){
        calculo = 0;
        edad.value = 30;
    }

    salida.innerHTML = calculo + " a " + edad.value;
}

function validar(e){//Para almacenar el error

    var elemento = e.target;
    elemento.style.background = "#FFDDDD";

}
 
function enviar(){

    var cuadroUsuario = document.getElementById("usuario");

    var correcto = document.datos_usuario.checkValidity();//Nos muestra si es correcto

    if(correcto == true){

        document.datos_usuario.submit();
    }else if(cuadroUsuario.validity.valueMissing == true){//Con valueMissing saltará la alerta sí el cuadro de usuario está vacío
        alert("El usuario no puede estar vacío");
    }else if(cuadroUsuario.validity.patternMismatch == true){//Con patternMismatch saltará la alerta sí el cuadro de usuario no cúmple con los requisitos preestablecidos en el formulario
        alert("El usuario debe tener un máximo de 3 letras");
    }
}

function validarTiempoReal(e){//Función para validar en tiempo real
    var elemento = e.target;

    if(elemento.validity.valid == true){
        elemento.style.background = "#dbeddc";//Si va bien
    }else {
        elemento.style.background = "#FFDDDD";//Si va mal
    }

}


window.addEventListener("load",comenzar,false)