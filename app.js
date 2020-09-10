const toggleMenu = document.querySelector('.menu-toggle input');
const navUl = document.querySelector('nav ul');

toggleMenu.addEventListener('click', () => {
    navUl.classList.toggle('slide');
});