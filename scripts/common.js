document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header"),
    menu = document.querySelector(".menu"),
    navLinks = document.querySelector(".navLinks"),
    link = navLinks.querySelectorAll("li a"),
    closeMenu = document.querySelector(".closeMenu")

  const projectsLink = document.querySelector(".projectsLink");
  const submenu = document.querySelector(".submenu");
  projectsLink.addEventListener("click", () => {
      submenu.style.display = "block";
      setTimeout(() => {
        submenu.classList.toggle("active");
      }, 1)
         
  })

  window.addEventListener("scroll", () => {
    window.scrollY > 50
      ? header.classList.add("nav-active")
      : header.classList.remove("nav-active");
  });

  menu.addEventListener("click", () => {
    navLinks.classList.add("active");
  });

  closeMenu.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });

  link.forEach((l) => {
    l.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href").substring(1),
        targetElement = document.getElementById(targetId);

      if (targetElement) {
        event.preventDefault();
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - anchor.offsetHeight,
          behavior: "smooth",
        });
      }
    });
  });
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting normally

  const form = document.getElementById('contactForm');
  const submitButton = form.querySelector('.submitForm');
  const phoneInput = form.querySelector('input[name="Phone"]');  // Select phone number input
  const formError = document.getElementById('formError');  // Select the formError element

  // Remove any previous error message
  formError.textContent = '';  // Clear any previous error message
  phoneInput.style.backgroundColor = '';  // Reset background color

  // Validate Phone Number (must be exactly 10 digits)
  const phoneValue = phoneInput.value.trim();
  const phoneRegex = /^[0-9]{10}$/;

  if (!phoneRegex.test(phoneValue)) {
    // If phone number is invalid, show error message and highlight the input
    phoneInput.style.border = '1px solid red';
    formError.textContent = 'Enter a 10-digit phone number only';
    formError.style.color = 'red';
    formError.style.fontSize = '12px';

    return;  // Prevent form submission
  }

  // If validation passes, proceed with form submission
  submitButton.value = "Submitting...";  
  submitButton.disabled = true; // Disable the button to prevent multiple submissions

  // Gather the form data
  const formData = new FormData(form);

  // Create an object to hold the form data
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Send data to Google Script
  fetch(form.action, {
    method: 'POST',
    body: new URLSearchParams(data), // Convert form data to query string
  })
  .then(response => response.json())
  .then(result => {
    if (result.result === 'success') {
      // Show success message and redirect to main page
      alert('Your enquiry has been submitted. Our team will get back to you soon.');
      window.location.href = '/';  // Redirect to main page (replace with your actual page URL)
    } else {
      // Handle error
      alert('There was an issue submitting your form. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('There was an error. Please try again.');
  })
  .finally(() => {
    // Reset the submit button
    submitButton.value = "Submit";
    submitButton.disabled = false;
  });
});