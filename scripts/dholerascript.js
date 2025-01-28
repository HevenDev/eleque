document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".header");
  const enquiry = document.querySelector(".enquiry");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      // Adjust the scroll threshold as needed
      navbar.classList.add("nav-active");
      enquiry.style.display = "inline-block"; // Set enquiry to inline-block
    } else {
      navbar.classList.remove("nav-active");
      enquiry.style.display = "none"; // Hide enquiry when scrolling back up
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const navLinks = document.getElementById("navLinks");
  menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  const links = navLinks.querySelectorAll("li a"); // Select all links inside navLinks
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active"); // Remove active class from menu
      navLinks.classList.remove("active"); // Remove active class from navLinks
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


