const promocodeObj = {
    promocode: "PROM50",
    gift: "Скидка 50%"
   }

const formEl = document.querySelector('.form');
const promoWrapEl = document.querySelector('.promo-wrap');
const wrapEl = document.querySelector('.wrap');
const inputEl = document.querySelector('.promo-input');
const btnEl = document.querySelector('.promo-btn');
const captionEl = document.querySelector('.promo-caption');

function getCookie () {
    return document.cookie.split('; ').reduce((acc, item) => {
        const [key, value] = item.split('=')
        acc[decodeURIComponent(key)] = decodeURIComponent(value)

        return acc
    }, {})
}

const cookie = getCookie()

if (typeof cookie.promo !== 'undefined') {
    inputEl.setAttribute('value', `${cookie.promo}`)
}

formEl.addEventListener ('submit', function (e) {
    e.preventDefault();

    if (promocodeObj.promocode == inputEl.value) {
        captionEl.textContent = `Промокод применён. ${promocodeObj.gift}` 
        captionEl.classList.add('promo-caption--active')
        inputEl.classList.add('promo-input--true')
        document.cookie = `promo = ${inputEl.value}`
    } else {
        inputEl.classList.remove('promo-input--true')
        captionEl.classList.remove('promo-caption--active');
    }
})
