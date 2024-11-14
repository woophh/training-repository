const promocodeArr = [
    {
      promocode: 'PROM10',
      gift: "Скидка 10%"
    },
    {
      promocode: 'PROM50',
      gift: "Скидка 50%"
    },
    {
      promocode: 'GIFT',
      gift: "Подарок в корзине"
    }
]

const formEl = document.querySelector('.form');
const promoWrapEl = document.querySelector('.promo-wrap');
const wrapEl = document.querySelector('.wrap');
const inputEl = document.querySelector('.promo-input');
const btnEl = document.querySelector('.promo-btn');
const captionEl = document.querySelector('.promo-caption');
let truePromo

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
    
    promocodeArr.forEach(el => {
        if (el.promocode == inputEl.value) {
            truePromo = el
        } 
    });

    if (typeof truePromo !== 'undefined') {
        captionEl.textContent = `Промокод применён. ${truePromo.gift}` 
        captionEl.classList.add('promo-caption--active')
        inputEl.classList.add('promo-input--true')
        document.cookie = `promo = ${inputEl.value}`
        truePromo = undefined
    }
    else {
        inputEl.classList.remove('promo-input--true')
        captionEl.classList.remove('promo-caption--active');
    }
})