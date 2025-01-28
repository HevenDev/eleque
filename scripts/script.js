document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("header");
  const menu = document.querySelector(".menu");
  const navLinks = document.querySelector(".navLinks");
  const links = navLinks.querySelectorAll("li a");
  const closeMenu = document.querySelector(".closeMenu");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      // Adjust the scroll threshold as needed
      navbar.classList.add("nav-active");
    } else {
      navbar.classList.remove("nav-active");
    }
  });
  menu.addEventListener("click", () => {
    navLinks.classList.add("active");
  });
  closeMenu.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});
