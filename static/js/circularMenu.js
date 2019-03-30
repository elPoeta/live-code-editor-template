const floatButton = document.querySelector(".floating-btn");
const circularMenu = document.querySelector("#circularMenu");
floatButton.addEventListener("click", () => {
  floatButton.classList.toggle("pulsed");
  circularMenu.classList.toggle("active");
});
