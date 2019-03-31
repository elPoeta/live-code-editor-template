const floatButton = document.querySelector(".floating-btn");
const circularMenu = document.querySelector("#circularMenu");
const openHamburgerMenu = document.querySelector('#openHamburgerMenu');
const closeHamburgerMenu = document.querySelector('#closeHamburgerMenu');

floatButton.addEventListener("click", () => {
  floatButton.classList.toggle("pulsed");
  circularMenu.classList.toggle("active");
});

openHamburgerMenu.addEventListener('click', () => {
  document.querySelector("#myNav").style.height = "100%";
});

closeHamburgerMenu.addEventListener('click', () => {
  document.querySelector("#myNav").style.height = "0%";
});