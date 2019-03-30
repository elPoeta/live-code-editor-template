const floatButton = document.querySelector('#float-button');
const circularMenu = document.querySelector('#circular-menu');

floatButton.addEventListener('click', () => {
    floatButton.classList.toggle('pulsed');
    circularMenu.classList.toggle('expand');
});