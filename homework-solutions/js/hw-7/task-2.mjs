/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (word && typeof word === 'string') {
    return word.split('').reverse().join('').toLowerCase() === word.toLowerCase()
    }
  } else {
    return word === ''
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