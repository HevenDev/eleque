document.addEventListener("DOMContentLoaded", () => {
  let numbers = document.querySelectorAll(".waNumber");
  let hasStarted = false; // Prevent multiple triggers
  let finalValues = [10, 45, 12, 25]; // Define final values for each element

  function startCounting() {
    if (hasStarted) return; // Prevents restarting the animation
    hasStarted = true;

    numbers.forEach((numElement, index) => {
      let finalValue = finalValues[index];
      let currentValue = 0;
      let increment = finalValue / 20; // Start with a reasonable increment
      let speed = 20; // Initial speed

      function updateNumber() {
        if (currentValue < finalValue) {
          currentValue += increment;
          if (currentValue > finalValue) currentValue = finalValue;

          numElement.textContent = Math.floor(currentValue);

          // Reduce increment as it nears the final value
          increment *= 1;
          speed += 9; // Increase speed delay to slow down updates

          setTimeout(updateNumber, speed);
        } else {
          numElement.textContent = finalValue; // Ensure exact final value
        }
      }

      updateNumber();
    });
  }

  function checkScroll() {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    let triggerPoint = document.documentElement.scrollHeight * 0.1; 

    if (scrollPosition >= triggerPoint) {
      startCounting();
      window.removeEventListener("scroll", checkScroll); 
    }
  }

  window.addEventListener("scroll", checkScroll);
});
