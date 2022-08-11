 /* Intercambia el valor de la opcion display para ocultar/mostrar la barra de navegacion */
 function MostrarOcultar() {
    var x = document.getElementById("nav_bar");
 
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }