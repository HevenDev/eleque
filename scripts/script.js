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
