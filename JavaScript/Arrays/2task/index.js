let height = [164, 157, 160, 143, 170]

function createList (arr, list) {
    for (let i = 0; i < arr.length; i++) {
        let listEl = document.createElement('li')
        list.append(listEl)
        listEl.textContent = `${i+1}) ${arr[i]}`
    }
}

const heading = document.createElement('h1')
document.body.append(heading)
heading.textContent = 'Рост учеников'

const btnAdd = document.createElement('button')
document.body.append(btnAdd)
btnAdd.classList.add('btn-add')
btnAdd.textContent = 'Добавить рост'

btnAdd.onclick = function () {
    let newHeight = prompt('Введите рост ученика')
    if (newHeight==='') {
        alert('Вы не ввели рост!')
    } else {
        list.innerHTML=''
        height.push(newHeight)
        createList(height, list)
    }
}

const btnFilter = document.createElement('button')
document.body.append(btnFilter)
btnFilter.classList.add('btn-filter')
btnFilter.textContent = 'Фильтровать'

btnFilter.onclick = function () {
    let minHeight = prompt('Введите минимальный рост')
    if (minHeight==='') {
        alert('Вы не ввели минимальный рост для фильтрации')
    } else {
        let newHeightList = []
        for (const element of height) {
                if (element>=minHeight) {
                    newHeightList.push(element)
                }
        }
        list.innerHTML = ''
        createList(newHeightList, list)
    }
}

const list = document.createElement('ul')
document.body.append (list)
list.classList.add('list')

createList (height, list)