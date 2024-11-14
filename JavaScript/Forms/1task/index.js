const formEl = document.querySelector('.form');
const inputName = document.querySelector('.name');
const inputMail = document.querySelector('.email');
const inputEvaluation = document.querySelector('.evaluation');
const inputHobby = Array.from(document.querySelectorAll('.hobby'))
const inputComment = document.querySelector('.comment');
const resultsEl = document.querySelector('.results');

let inputGenderChecked = ''
let inputHobbyCheck = []

function HobbyFunction (Arr) {
    inputHobbyCheck = []
    Arr.forEach(el => {
        if (el.checked) {
            inputHobbyCheck.push(el.value);
        }
    }); 

    for (let i = 0; i < inputHobbyCheck.length; i++) {
        if (inputHobbyCheck[i] == 'sport') {
            inputHobbyCheck[i] = 'Спорт'
        } if (inputHobbyCheck[i] == 'music') {
            inputHobbyCheck[i] = 'Музыка'
        } if (inputHobbyCheck[i] == 'movie') {
            inputHobbyCheck[i] = 'Кино'
        } if (inputHobbyCheck[i] == 'painting') {
            inputHobbyCheck[i] = 'Живопись'
        } if (inputHobbyCheck[i] == 'travelling') {
            inputHobbyCheck[i] = 'Путешествия'
        } 
    }
 return inputHobbyCheck
}

formEl.addEventListener ('submit', function (e) {
    e.preventDefault();
    resultsEl.innerHTML = '';

    const inputGender = document.querySelector('input[name="gender"]:checked');

    function genderFunction () {
        if (inputGender.value == 'male') {
            inputGenderChecked = 'Мужской';
        } if (inputGender.value == 'female') {
            inputGenderChecked = 'Женский';
        }
        return
    }

    const resultH1 = document.createElement('h1');
    resultsEl.append(resultH1)
    resultH1.textContent = 'Результаты опроса'

    const nameEl = document.createElement('span');
    nameEl.textContent = `Имя: ${inputName.value}`
    resultsEl.append(nameEl)

    const mailEl = document.createElement('span');
    mailEl.textContent = `E-mail: ${inputMail.value}`
    resultsEl.append(mailEl)

    genderFunction()
    const genderEl = document.createElement('span');
    genderEl.textContent = `Пол: ${inputGenderChecked}`
    resultsEl.append(genderEl)

    const evaluationEl = document.createElement('span');
    evaluationEl.textContent = `Оценка сервиса: ${inputEvaluation.value}`
    resultsEl.append(evaluationEl)

    HobbyFunction (inputHobby)
    const hobbyList = document.createElement('span');
    hobbyList.textContent = `Интересы пользователя: ${inputHobbyCheck.join()}`
    resultsEl.append(hobbyList)

    const commentEl = document.createElement('span');
    commentEl.textContent = `Дополнительные комментарии: ${inputComment.value}`
    resultsEl.append(commentEl)
})