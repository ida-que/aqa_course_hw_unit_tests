/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arr) {
  const arrayOfArgs = [...arr];
  const mergedArray = [];
  for (let el of arrayOfArgs) {
    mergedArray.push(...el)
  }
  return mergedArray;
}

mergeArrays([1,2], [3,4], [5,6]);
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */

function devideBy(sentence) {
  const arrSentence = sentence.split(" ");
  for (let i = 0; i <= arrSentence.length - 1; i++) {
    arrSentence[i] = arrSentence[i].toLowerCase();
    if (i !== 0) {
      arrSentence[i] = [...arrSentence[i]].map((char, i) => (i === 0 ? char.toUpperCase() : char.toLowerCase())).join('');
      }
  }
  const arrNoSpaces = arrSentence.filter(word => word !== '');
  sentence = arrNoSpaces.join("_");
  return sentence;
}

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  let zeroFib = 0;
  let firstFib = 1; 
  let secondFib = 1;

  if (n === 0) return zeroFib;
  if (n === 1) return firstFib;
  if (n === 2) return secondFib;

  let previousFib = firstFib;
  let currentFib = secondFib;
  for (let i = 3; i <= n; i++) {
      let nextFib = previousFib + currentFib;
      previousFib = currentFib;
      currentFib = nextFib;
  }
  return currentFib;
}

export { mergeArrays, fibonacci, devideBy };
