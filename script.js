const dropDown = document.querySelectorAll('.features');
const featuresButton = document.querySelector('.navbar-left').querySelector('ul').children[0];
const companyButton = document.querySelector('.navbar-left').querySelector('ul').children[1];
const hamburgermenuButton = document.getElementById('hamburger-menu-button');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const backDrop = document.querySelector('#backdrop');

const mobileDropDown = document.querySelectorAll('.mobile-features');
const mobilefeaturesButton = document.querySelector('.mobile-navbar-left').querySelector('ul').children[0];
const mobilecompanyButton = document.querySelector('.mobile-navbar-left').querySelector('ul').children[2];

const downArrow = document.querySelectorAll('.downarrow');
const mobileDownArrow = document.querySelectorAll('.mobile-downarrow');




featuresButton.addEventListener('click', () => {
    dropDown[0].classList.toggle('visible');
    downArrow[0].classList.toggle('uparrow');

});
companyButton.addEventListener('click', () => {
    dropDown[1].classList.toggle('visible');
    downArrow[1].classList.toggle('uparrow');
});

hamburgermenuButton.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    backDrop.classList.toggle('visible');
});

mobilefeaturesButton.addEventListener('click', () => {
    mobileDropDown[0].classList.toggle('visible');
    mobileDownArrow[0].classList.toggle('uparrow');
});

mobilecompanyButton.addEventListener('click', () => {
    mobileDropDown[1].classList.toggle('visible');
    mobileDownArrow[1].classList.toggle('uparrow');
});