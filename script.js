(function () {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("close-menu");

  function openMenu() {
    mobileMenu.style.opacity = "1";
    mobileMenu.style.pointerEvents = "auto";
    menuBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function closeMenu() {
    mobileMenu.style.opacity = "0";
    mobileMenu.style.pointerEvents = "none";
    menuBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  menuBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);

  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();
