/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

let item_num = 3;
let item_str = String(item_num);
let concatItemsSum = item_num + +(item_num + item_str) + +(item_num + item_str + item_str);
console.log(concatItemsSum);


// решение номер 2
let num = 3;
console.log(num + +(num + String(num)) + +(num + String(num) + String(num)));
