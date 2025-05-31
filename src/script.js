console.log("Index cargado correctamente");
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");
  const menuLinks = menu.querySelectorAll("a");

  const toggleMenu = () => {
    btn.classList.toggle("open");
    menu.classList.toggle("opacity-0");
    menu.classList.toggle("pointer-events-none");
  };

  btn.addEventListener("click", toggleMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Solo cerrar si el menú está abierto
      if (btn.classList.contains("open")) {
        toggleMenu();
      }
    });
  });
});
