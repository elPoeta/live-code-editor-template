const floatButton = document.querySelector(".floating-btn");
const circularMenu = document.querySelector("#circularMenu");
const openHamburgerMenu = document.querySelector('#openHamburgerMenu');
const closeHamburgerMenu = document.querySelector('#closeHamburgerMenu');
const openModal = document.querySelector('#openModal');
const closeComboMenu = document.querySelector('#closeComboMenu');


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

openModal.addEventListener('click', () => {
  document.querySelector("#myCombo").style.height = "100%";
});

closeComboMenu.addEventListener('click', () => {
  document.querySelector("#myCombo").style.height = "0%";
});