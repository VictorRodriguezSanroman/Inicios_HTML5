function comenzar(){
    var nombre = document.getElementById("nombre");//Almacenamos el dato introducido en el formulario
    var apellido = document.getElementById("apellido");

    nombre.addEventListener("input", validar,false);
    apellido.addEventListener("input", validar,false);//Input para que se active cuando se introduzca el dato

    validar();
}

function validar(){
    if(nombre.value=="" && apellido.value==""){
        nombre.setCustomValidity("Debes introducir alguno de los campos requeridos");//Personalizamos el metodo de error

        nombre.style.background="#FFDDDD";//Cambiamos el stilo del cuadro (en este caso el color de fondo) si no hay ningún campo rellenado
        apellido.style.background="#FFDDDD";
    }else{
        //Debemos anular el mensaje de error porque el metodo anterior lo mantiene
        nombre.setCustomValidity("");

        nombre.style.background="#FFFFFF";
        apellido.style.background="#FFFFFF";
    }
}


window.addEventListener("load",comenzar,false);//Al cargar la página (load) carga el metodo seleccionado, en este caso comenzar