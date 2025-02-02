export const burger = document.querySelector('#burger')
burger.addEventListener ('click', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    if (burgerMenu.classList.contains('burger-menu--active')) {
        burgerMenu.classList.remove('burger-menu--active')
    } else {
        burgerMenu.classList.add('burger-menu--active')
    }
})