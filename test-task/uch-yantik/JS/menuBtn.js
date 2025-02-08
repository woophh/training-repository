function openMenu (evt, menuItem) {
    let i
    const menu = document.getElementsByClassName('tabcontent');
    const menuIt = document.getElementById(menuItem)
    
    for (i = 0; i < menu.length; i++) {
        menu[i].style.display = "none";
    }

    const btn = document.querySelectorAll(".menu__btn");
    for (i = 0; i < btn.length; i++) {
      btn[i].className = btn[i].className.replace(" menu__btn--active", "");
    }

    menuIt.style.display = "block";
    evt.currentTarget.className += " menu__btn--active"

    const navigate = document.querySelectorAll('.menu__navigate')
    for (i = 0; i < navigate.length; i++) {
        navigate[i].className = navigate[i].className.replace(" menu__navigate--active", "");
    }

    const nav = document.querySelector(`#${menuItem}-navigate`);
    nav.className += " menu__navigate--active"
}

window.openMenu = openMenu
document.getElementById("default").click();