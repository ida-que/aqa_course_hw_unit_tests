/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';
let vowels = 'aeiouAEIOU';
let vowelsCount = 0;
let consonantsCount = 0;
for (let letter of word) {
    if (letter.match(/[a-zA-Z]/)) {
        if (vowels.includes(letter)) {
            vowelsCount++;
        } else {
            consonantsCount++;
        }
    }
vowelsAndConsonantsResult = `${word} contains ${vowelsCount} vowels and ${consonantsCount} consonants`;
}
console.log(vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };
