const imageOne = document.querySelector('.image-1');
const imageTwo = document.querySelector('.image-2');
const imageThree = document.querySelector('.image-3');
const selectedPhoto = document.querySelector('.selected-photo');

imageOne.onclick = function () {
    selectedPhoto.innerHTML = ''
    const imageOneAttribute = imageOne.getAttribute('src')
    const imageOneBig = document.createElement('img')
    imageOneBig.setAttribute('src', imageOneAttribute)
    selectedPhoto.append(imageOneBig)
};

imageTwo.onclick = function () {
    selectedPhoto.innerHTML = ''
    const imageTwoAttribute = imageTwo.getAttribute('src')
    const imageTwoBig = document.createElement('img')
    imageTwoBig.setAttribute('src', imageTwoAttribute)
    selectedPhoto.append(imageTwoBig)
};

imageThree.onclick = function () {
    selectedPhoto.innerHTML = ''
    const imageThreeAttribute = imageThree.getAttribute('src')
    const imageThreeBig = document.createElement('img')
    imageThreeBig.setAttribute('src', imageThreeAttribute)
    selectedPhoto.append(imageThreeBig)
};