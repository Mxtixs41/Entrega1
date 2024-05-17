
function validarInicio() {
    let correo = document.getElementById("exampleInputEmail1").value;
    let contraseña = document.getElementById("exampleInputPassword1").value;

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
        document.getElementById("exampleInputEmail1").style.border = "3px solid red";
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    } else {
        document.getElementById("exampleInputEmail1").style.border = "1px solid lightgray";

    }

    if (contraseña.length === 0) {
        document.getElementById("exampleInputPassword1").style.border = "3px solid red";
        alert("Por favor, ingrese su contraseña.");
        return false;
    } else {
        document.getElementById("exampleInputPassword1").style.border = "1px solid lightgray";

    }


    alert("Inicio de sesion exitoso!");
    return true;

}

function validarRegistro() {

    let rut = document.getElementById("rut").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correoregistro = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (String(rut).length < 9 || String(rut).length > 10) {
        document.getElementById("rut").style.border = "3px solid red";
    } else{
        document.getElementById("rut").style.border = "1px solid lightgray";
    }
    
    if (String(nombre).length < 3 || String(nombre).length > 20) {
        document.getElementById("nombre").style.border = "3px solid red";
    }else{
        document.getElementById("nombre").style.border = "1px solid lightgray";
    }

    if (String(apellido).length < 3 || String(nombre).length > 20) {
        document.getElementById("apellido").style.border = "3px solid red";

    }else{
        document.getElementById("apellido").style.border = "1px solid lightgray";
    }

    if (!regexCorreo.test(correoregistro)) {
        document.getElementById("correo").style.border = "3px solid red";

    }else{
        document.getElementById("correo").style.border = "1px solid lightgray";
    } 
    
    if (String(telefono).length < 9 || String(telefono).length > 12) {
        document.getElementById("telefono").style.border = "3px solid red";

    } else {
        document.getElementById("telefono").style.border = "1px solid lightgray";
        
        alert("Usuario registrado con exito!");
        return true;
    }
    
}

function limpiarCampos() {
    document.getElementById("rut").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("password").value = "";
    document.getElementById("passwordConfirm").value = "";

    rut.focus();

    $('#exampleModal').modal('hide');

}


