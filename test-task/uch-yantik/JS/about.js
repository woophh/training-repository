const karaimsBtn = document.querySelector('#karaimsBtn');
const bakeryBtn = document.querySelector('#bakeryBtn');

karaimsBtn.addEventListener ('click', () => {
    if (karaimsBtn.classList.contains('about__btn--active') == false) {
        bakeryBtn.classList.remove('about__btn--active')
        document.querySelector('#bakery').classList.remove('about__part--actve')
        karaimsBtn.classList.add('about__btn--active')
        document.querySelector('#karaims').classList.add('about__part--actve')
    } else {
        return
    }
})

bakeryBtn.addEventListener ('click', () => {
    if (bakeryBtn.classList.contains('about__btn--active') == false) {
        karaimsBtn.classList.remove('about__btn--active')
        document.querySelector('#karaims').classList.remove('about__part--actve')
        bakeryBtn.classList.add('about__btn--active')
        document.querySelector('#bakery').classList.add('about__part--actve')
    } else {
        return
    }
})