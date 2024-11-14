const formEl = document.querySelector('.form');
const nameEl = document.querySelector('.delivery-calculator__name-input');
const weightEl = document.querySelector('.delivery-calculator__weight-input');
const distanceEl = document.querySelector('.delivery-calculator__distance-input');
const table = document.querySelector('tbody');
const errorEl = document.querySelector('.error');


formEl.addEventListener ('submit', function (e) {
    e.preventDefault()

    errorEl.classList.remove('error--active')

    if (weightEl.value <= 0 || weightEl.isNaN) {
        errorEl.classList.add('error--active')
        return
    }

    if (distanceEl.value <= 0 || weightEl.isNaN) {
        errorEl.classList.add('error--active')
        return
    }

    function createEl (name) {
        const createTd = document.createElement('td');
        createTd.textContent = `${name.value}`
        createTr.append(createTd)
    }

    const costEl = (weightEl.value * distanceEl.value)/10;

    const createTr = document.createElement('tr');
    table.append(createTr)

    createEl (nameEl)
    createEl (weightEl)
    createEl (distanceEl)

    const createCost = document.createElement('td');
    createCost.textContent = `${costEl.toFixed(2)} руб.`
    createTr.append(createCost)

    e.target.reset()
})