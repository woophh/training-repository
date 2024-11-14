const body = document.querySelector('body');
const giftArr = [
    {
      title: "Скидка 20% на первую покупку в нашем магазине!",
      icon: "img/discount.svg"
    },
    {
      title: "Скидка 10% на всё!",
      icon: "img/discount_2.svg"
    },
    {
      title: "Подарок при первой покупке в нашем магазине!",
      icon: "img/gift.svg"
    },
    {
      title: "Бесплатная доставка для вас!",
      icon: "img/delivery.svg"
    },
    {
      title: "Сегодня день больших скидок!",
      icon: "img/discount_3.svg"
    }
]

let randomNumber =  Math.floor(Math.random()*(5 - 1 + 1)+1)

function randomGift () {
for (let i = 0; i < giftArr.length; i++) {
  if ((i+1) == randomNumber) {
  return giftArr[i]
  } 
}
};

function popup () {
  let cardEl = document.createElement('div')
  body.append(cardEl)
  cardEl.classList.add('pop-up')
    
  let imgEl = document.createElement('img')
  imgEl.src = `${randomGift().icon}`
  cardEl.append(imgEl)
 
  let wrapperEl = document.createElement('div')
  wrapperEl.classList.add('wrapper')
  cardEl.append(wrapperEl)
 
  let titelEl = document.createElement('h2')
  titelEl.classList.add('title')
  titelEl.textContent = `${randomGift().title}`
  wrapperEl.append(titelEl)
 
  let btnEl = document.createElement('button')
  btnEl.textContent = 'Отлично!'
  wrapperEl.append(btnEl)
  btnEl.classList.add('btn')

  btnEl.addEventListener('click', () => {
    cardEl.remove()
  })
}

const timer = setTimeout(()=>{
  popup()
}, 3000)

