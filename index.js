const menuIcon = document.querySelector('#menu-icon img');
const menu = document.querySelector('.nav .links');

let isHiden = true;

menuIcon.addEventListener('click', () =>{
    menu.classList.toggle('active');
    menuIcon.src = isHiden ?  'assets/icons/icon-close.svg': 'assets/icons/icon-hamburger.svg';
    isHiden = !isHiden;
});