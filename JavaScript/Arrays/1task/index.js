const library = ['Мастер и Маргарита', 'Гари Поттер', 'Над пропастью во ржи', 'Властелин колец', 'Дюна']

function createEl (arr) {

    for (let i = 0; i < arr.length; i++) {
        let listEl = document.createElement('li')
        list.append(listEl)
        listEl.textContent = `${i+1}) ${arr[i]}`
        listEl.classList.add('list-item')
    }    
}

let result = -1

function find (arr, search) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            result = i
            break
        }
    }
    return result
}

const h1 = document.createElement('h1')
document.body.append(h1)
h1.textContent = "Домашняя библиотека"

const btn = document.createElement('div')
document.body.append(btn)
btn.classList = 'btn-wrapper'

const btnAdd = document.createElement('button')
btnAdd.textContent='Добавить книгу'
btn.append(btnAdd)
btnAdd.classList='btn-add'

btnAdd.onclick = function () {
    let newBook = prompt("Введите название книги, которую хотите добавить")
    if (newBook === "") {
        alert("Название книги не введено!")
    } else {
        library.push(newBook)
        list.innerHTML = ""
        createEl(library)
    }
}

const btnSearch = document.createElement('button')
btnSearch.textContent='Найти'
btn.append(btnSearch)
btnSearch.classList='btn-search'

btnSearch.onclick = function () {
    let liEl = document.querySelectorAll('.list-item');
    const libraryList = Array.from(liEl)

    for (let index = 0; index < libraryList.length; index++) {
        liElActive = document.querySelector('list-active') 
        libraryList[index].classList.remove('list-active')
    }
     
    let findBook = prompt('Какую книгу вы хотите найти?')
    const findIndex = find(library, findBook)
    if (findIndex>-1) {
        document.querySelector(`li:nth-child(${findIndex+1})`).classList.add('list-active')
    } else {
        alert('Книга не найдена!')
    }
}

const list = document.createElement('ul')
document.body.append(list)

createEl(library)