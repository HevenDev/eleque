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

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const parentPopup = document.querySelector(".parentPopup");
  const closeBtn = document.querySelector(".closeBtn");
  const popButtons = document.querySelectorAll(".popButton");

  // Function to show the popup
  const showPopup = () => {
    popup.classList.add("popup-active");
    parentPopup.classList.add("parentPopup-active");
  };

  // Function to hide the popup
  const hidePopup = () => {
    popup.classList.remove("popup-active");
    parentPopup.classList.remove("parentPopup-active");
  };

  // Show popup after 5 seconds on page load
  setTimeout(showPopup, 5000);

  // Set interval to show popup every 1 minute
  setInterval(showPopup, 60000);

  // Add event listener to close button
  closeBtn.addEventListener("click", hidePopup);

  // Add event listeners to all buttons with class 'popButton'
  popButtons.forEach((btn) => {
    btn.addEventListener("click", showPopup);
  });
});
