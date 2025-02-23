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

let resultUnique = []; 
let resultNull = null; // небольшой костыль

// ====== "Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull"." ============
// 
// Условие выше трактовала немного иначе. Ниже объединила 2 массива и только потом сравнила. 
// В данном случае resultNull будет равен null только если у конкурента есть все мои пиццы из ОБОИХ наборов.

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'].map(competitorPizza => competitorPizza.toLowerCase());

const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

const allMyPizzas = [...myPizzasT1, ...myPizzasT2].map(myPizza => myPizza.toLowerCase());

for (let myPizza of allMyPizzas) {
  if (!competitorPizzas.includes(myPizza)) {
    resultUnique.push(myPizza.replace(/^\w/, c => c.toUpperCase()));
  }
}
if (!resultUnique.length) {
  resultNull = null;
}

export { resultNull, resultUnique };
