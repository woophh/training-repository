const formEl = document.querySelector('.form');
const textEl = document.querySelector('.text');
const colorEl = document.querySelector('.select');
const cardEl = document.querySelector('.card');

textEl.addEventListener ('input', function () {
    cardEl.textContent = `${textEl.value}`
})

console.log(colorEl);
colorEl.addEventListener ('change', function (event) {
    cardEl.classList.remove('red', 'green', 'blue')
    cardEl.classList.add(`${event.target.value}`)
})

textEl.addEventListener ('focus', function () {
    textEl.classList.add('text--focus')
})

textEl.addEventListener ('blur', function () {
    textEl.classList.remove('text--focus')
})