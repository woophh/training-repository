const cart = ['Макароны', 'Арбуз', 'Кофе', 'Яблоки', 'Молоко', 'Книга', 'Сахар']

function sort (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let index = 0; index < arr.length-1; index++) {
            if (arr[index]>arr[index+1]) {
                let temp = arr[index]
                arr[index] = arr[index+1]
                arr[index+1] = temp
            }
        }
        
    }
    return arr
}

function createList (arr) {
    sort (arr)
    for (let i = 0; i < arr.length; i++) {
        let listEl = document.createElement('li')
        list.append(listEl)
        listEl.textContent = `${i+1}) ${arr[i]}`
    }
}

const heading = document.createElement('h1')
document.body.append(heading)
heading.textContent = 'Корзина покупателя'

const btnAdd = document.createElement('button')
btnAdd.classList.add('btn-add')
btnAdd.textContent = 'Добавить товар'
document.body.append(btnAdd)

btnAdd.onclick = function () {
   let newProduct = prompt('Введите название тотвара')
   if (newProduct==='') {
    alert('Вы не ввели название товара')
   } else {
    list.innerHTML = ''
    cart.push(newProduct)
    createList(cart)
   }
}

const list = document.createElement('ul')
document.body.append(list)
createList (cart)
