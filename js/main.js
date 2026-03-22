const hamburger = document.querySelector('.hamburger-box');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('mouseenter', () => {
    hamburger.classList.toggle('rotate');
});

hamburger.addEventListener('mouseleave', () => {
    hamburger.classList.toggle('rotate');
});

hamburger.addEventListener('click', () => {
    navList.classList.toggle('hide');
});