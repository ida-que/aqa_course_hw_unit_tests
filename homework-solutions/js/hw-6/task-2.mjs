/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

// // Для обоих массивов сразу, с объединением (с этими данными в null не падает)

// let resultUnique = []; 
// let resultNull = null; // заглушка

// const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'].map(competitorPizza => competitorPizza.toLowerCase());

// const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
// const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

// const allMyPizzas = [...myPizzasT1, ...myPizzasT2];

// for (let myPizza of allMyPizzas) {
//   if (!competitorPizzas.includes(myPizza.toLowerCase)) {
//     resultUnique.push(myPizza);
//   }
// }
// if (!resultUnique.length) {
//   resultNull = null;
// }

// // Решение номер 2 - без объединения, для каждого из данных массивов

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian']; // Для теста 1 - проверка resultUnique
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']; // Для теста 2 - проверка resultNull

const competitorPizzasToLower = competitorPizzas.map(el => el.toLowerCase());

let resultUnique = []; 
let resultNull;

for (let myPizza of myPizzasT1) {
  if (!competitorPizzasToLower.includes(myPizza.toLowerCase())) {
    resultUnique.push(myPizza);
  }
  if (!resultUnique.length) {
    resultNull = null;
  }
  }

for (let myPizza of myPizzasT2) {
  if (!competitorPizzasToLower.includes(myPizza.toLowerCase())) {
    resultUnique.push(myPizza);
  }
  if (!resultUnique.length) {
    resultNull = null;
  }
}

export { resultNull, resultUnique };
