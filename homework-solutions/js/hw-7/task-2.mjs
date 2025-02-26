/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (word && typeof word === 'string') {
    let reversedWord = word.split('').reverse().join('').toLowerCase();
    if (word.toLowerCase() === reversedWord) {
      return true;
    } else {
      return false;
    }
  } else {
    return word === '' ? true : false;
  }
}


/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string') {
    return [];
  } else {
    const arrSentenceNoSpaces = sentence.split(' ').filter(word => word !== '');
    let maxLength = Math.max(...arrSentenceNoSpaces.map(word => word.length));
    return arrSentenceNoSpaces.filter(word => word.length === maxLength);
  }
}

export { isPalindrom, findLongestWords };