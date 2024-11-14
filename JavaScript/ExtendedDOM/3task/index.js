const list = document.querySelector('.list');
const btnIncreasing = document.querySelector('.increasing'); //возрастание
const btnDecreasing = document.querySelector('.decreasing'); //убывание

const array = [100, 500, 250, 750, 300]

function createList (arr) {
    list.innerHTML = ''
    for (const i of arr) {
        const listItem = document.createElement('li')
        listItem.textContent = i
        list.append(listItem)
    }
} 
createList (array)

btnIncreasing.onclick = function () {
    const arrSortIncreasing = array.sort((a,b) => a - b)
    createList (arrSortIncreasing)
}

btnDecreasing.onclick = function () {
    const arrSortDecreasing = array.sort((a,b) => b - a)
    createList (arrSortDecreasing)
}