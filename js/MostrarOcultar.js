// Obtén los elementos necesarios
const menuToggle = document.querySelector("#menu-toggle");
const menuItems = document.querySelector(".menu-items");

// Agrega un event listener para el botón del menú
menuToggle.addEventListener("change", function () {
  if (this.checked) {
    menuItems.style.display = "block";
  } else {
    menuItems.style.display = "none";
  }
});
