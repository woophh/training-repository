export const foodBtn = document.querySelector('#menuFood');
    const foodNavigate = document.querySelector('.menu__navigate-food');
    const menuFood = document.querySelector('.menu__food');
    const sauceBtn = document.querySelector('#menuSauce');
    const sauceNavigate = document.querySelector('.menu__navigate-sauce');
    const menuSauce = document.querySelector('.menu__sauce');
    const drinksBtn = document.querySelector('#menuDrinks');
    const drinksNavigate = document.querySelector('.menu__navigate-drinks');
    const menuDrinks = document.querySelector('.menu__drinks');

    foodBtn.addEventListener('click', () => {
        if (menuSauce.classList.contains('menu__active')) {
            menuSauce.classList.remove('menu__active')
            sauceBtn.classList.remove('menu__btn--active')
            sauceNavigate.classList.remove('menu__navigate-active')
        } if (menuDrinks.classList.contains('menu__active')) {
            menuDrinks.classList.remove('menu__active')
            drinksBtn.classList.remove('menu__btn--active')
            drinksNavigate.classList.remove('menu__navigate-active')
        } if (menuFood.classList.contains('menu__active')) {
            return
        }
        foodBtn.classList.add('menu__btn--active')
        foodNavigate.classList.add('menu__navigate-active')
        menuFood.classList.add ('menu__active')
    })

    sauceBtn.addEventListener('click', () => {
        if (menuFood.classList.contains('menu__active')) {
            menuFood.classList.remove('menu__active')
            foodBtn.classList.remove('menu__btn--active')
            foodNavigate.classList.remove('menu__navigate-active')
        } if (menuDrinks.classList.contains('menu__active')) {
            menuDrinks.classList.remove('menu__active')
            drinksBtn.classList.remove('menu__btn--active')
            drinksNavigate.classList.remove('menu__navigate-active')
        } if (menuSauce.classList.contains('menu__active')) {
            return
        }
        sauceBtn.classList.add('menu__btn--active')
        sauceNavigate.classList.add('menu__navigate-active')
        menuSauce.classList.add ('menu__active')
    })

    drinksBtn.addEventListener('click', () => {
        if (menuFood.classList.contains('menu__active')) {
            menuFood.classList.remove('menu__active')
            foodBtn.classList.remove('menu__btn--active')
            foodNavigate.classList.remove('menu__navigate-active')
        } if (menuSauce.classList.contains('menu__active')) {
            menuSauce.classList.remove('menu__active')
            sauceBtn.classList.remove('menu__btn--active')
            sauceNavigate.classList.remove('menu__navigate-active')
        } if (menuSauce.classList.contains('menu__active')) {
            return
        }
        drinksBtn.classList.add('menu__btn--active')
        drinksNavigate.classList.add('menu__navigate-active')
        menuDrinks.classList.add ('menu__active')
    })