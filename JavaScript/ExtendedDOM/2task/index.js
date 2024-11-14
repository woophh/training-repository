const list = document.querySelector('.list')
const btnAdd = document.querySelector('.add-list-item')
const btnDelete = document.querySelector('.delete-list-item')


btnAdd.onclick = function () {
    const listItem = document.createElement ('li')
    listItem.textContent = 'Новый элемент списка'
    list.append(listItem)
}

btnDelete.onclick = function () {
    const DelEl = list.lastElementChild;
    DelEl.remove()
}