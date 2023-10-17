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

let navCutStatus = false;


featuresButton.addEventListener('click', () => {
    dropDown[0].classList.toggle('visible');
    downArrow[0].classList.toggle('uparrow');

});
companyButton.addEventListener('click', () => {
    dropDown[1].classList.toggle('visible');
    downArrow[1].classList.toggle('uparrow');
});

hamburgermenuButton.addEventListener('click', () => {
    if (!navCutStatus) {
        hamburgermenuButton.innerHTML = `
        <button id="hamburger-menu-button2"><svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><g fill="#151515" fill-rule="evenodd"><path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z"/><path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z"/></g></svg></button>
        `;
        navCutStatus = true;
    }
    else {
        hamburgermenuButton.innerHTML = `<button id="hamburger-menu-button2"><svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
          <g fill="#151515" fill-rule="evenodd">
            <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
          </g>
        </svg></button>`
        navCutStatus = false;
    }
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