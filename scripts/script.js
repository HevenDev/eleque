document.addEventListener("DOMContentLoaded", () => {
  const e = document.querySelector("header"),
    t = document.querySelector(".menu"),
    n = document.querySelector(".navLinks"),
    o = n.querySelectorAll("li a"),
    c = document.querySelector(".closeMenu"),
    d = document.getElementById("popup"),
    i = document.querySelector(".parentPopup"),
    a = document.querySelector(".closeBtn"),
    s = document.querySelectorAll(".popButton");
  window.addEventListener("scroll", () => {
    window.scrollY > 50
      ? e.classList.add("nav-active")
      : e.classList.remove("nav-active");
  }),
    t.addEventListener("click", () => {
      n.classList.add("active");
    }),
    c.addEventListener("click", () => {
      n.classList.remove("active");
    }),
    o.forEach((e) => {
      e.addEventListener("click", () => {
        n.classList.remove("active");
      });
    }),
    document.querySelectorAll('a[href^="#"]').forEach((e) => {
      e.addEventListener("click", (t) => {
        const n = e.getAttribute("href").substring(1),
          o = document.getElementById(n);
        o &&
          (t.preventDefault(),
          window.scrollTo({
            top:
              o.getBoundingClientRect().top + window.scrollY - e.offsetHeight,
            behavior: "smooth",
          }));
      });
    });
  const r = () => {
      d.classList.add("popup-active"), i.classList.add("parentPopup-active");
    },
    l = () => {
      d.classList.remove("popup-active"),
        i.classList.remove("parentPopup-active");
    };
  setTimeout(r, 5e3),
    setInterval(r, 6e4),
    a.addEventListener("click", l),
    s.forEach((e) => {
      e.addEventListener("click", r);
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


