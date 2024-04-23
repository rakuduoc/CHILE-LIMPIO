function crearCarta() { /* le damos los valores puestos a cada variable mostrada */
    var infoMostrada = document.getElementById("infoMostrada");
    var rut = document.getElementById("rutInput").value;
    var nombre = document.getElementById("nombreInput").value;
    var appaterno = document.getElementById("appaternoInput").value;
    var apmaterno = document.getElementById("apmaternoInput").value;
    var fecha = document.getElementById("fechaInput").value;
    var edad = document.getElementById("edadInput").value;
    var genero = document.getElementById("generoInput").value;
    var correo = document.getElementById("correoInput").value;
    var celular = document.getElementById("celularInput").value;
    var profesion = document.getElementById("profesionInput").value;
    var motivacion = document.getElementById("motiInput").value;

    // se crea y escribe la carta con los datos dados
    var texto = "Rut: " + rut + "<br>" +
                "Nombre: " + nombre + "<br>" +
                "Apellido paterno: " + appaterno + "<br>" +
                "Apellido materno: " + apmaterno + "<br>" +
                "Fecha de nacimiento: " + fecha + "<br>" +
                "Edad: " + edad + "<br>" +
                "Género: " + genero + "<br>" +
                "Email: " + correo + "<br>" +
                "Celular: " + celular + "<br>" +
                "Profesión: " + profesion + "<br>" +
                "Motivación: " + motivacion + "<br>";

    // hace que el texto se vea como html
    infoMostrada.innerHTML = texto;
}


