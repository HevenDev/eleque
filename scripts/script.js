// ==== PopUp script is here, for common script do check common.js ====
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup"),
    parentPopup = document.querySelector(".parentPopup"),
    closeBtn = document.querySelector(".closeBtn"),
    popupBtn = document.querySelectorAll(".popButton");
  const showPopup = () => {
      popup.classList.add("popup-active");
      parentPopup.classList.add("parentPopup-active");
    },
    hidePopup = () => {
      popup.classList.remove("popup-active");
      parentPopup.classList.remove("parentPopup-active");
    };

  setTimeout(showPopup, 5000);
  setInterval(showPopup, 60000);

  closeBtn.addEventListener("click", hidePopup);
  popupBtn.forEach((btn) => {
    btn.addEventListener("click", showPopup);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let sections = [
    { selector: ".about-number", finalValues: [5, 2, 5, 4] },
    { selector: ".mumbaiNumber", finalValues: [6, 30, 75] },
    { selector: ".goaNumber", finalValues: [8, 6, 1.2] },
    { selector: ".dholeraNumber", finalValues: [9, 920, 500] }
  ];

  let hasStarted = false; // Prevent multiple triggers

  function startCounting(elements, finalValues) {
    elements.forEach((numElement, index) => {
      let finalValue = finalValues[index];
      let currentValue = 0;
      let increment = finalValue / 20;
      let speed = 20;

      function updateNumber() {
        if (currentValue < finalValue) {
          currentValue += increment;
          if (currentValue > finalValue) currentValue = finalValue;

          numElement.textContent = Math.floor(currentValue);
          speed += 9;
          setTimeout(updateNumber, speed);
        } else {
          numElement.textContent = finalValue;
        }
      }

      updateNumber();
    });
  }

  function checkScroll() {
    if (hasStarted) return;
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    let triggerPoint = document.documentElement.scrollHeight * 0.1;

    if (scrollPosition >= triggerPoint) {
      hasStarted = true;
      sections.forEach(({ selector, finalValues }) => {
        let elements = document.querySelectorAll(selector);
        if (elements.length) startCounting(elements, finalValues);
      });
      window.removeEventListener("scroll", checkScroll);
    }
  }

  window.addEventListener("scroll", checkScroll);
});
