const vowels = ['a', 'e', 'i', 'o', 'u']
 
let word = prompt();
 
 
function countVowels (word) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const wordArr = word.toLowerCase().split('')
    let vowelsFilter = ''
    let count = []
    for (const element of vowels) {
        vowelsFilter =  wordArr.filter(el => el.indexOf(element)>-1)
        if (vowelsFilter.length>0) {
            count.push(vowelsFilter.length)
        }
    }
    return count.reduce((a, b) => a+b)
}

const vowelCount = countVowels(word);
console.log(vowelCount);    