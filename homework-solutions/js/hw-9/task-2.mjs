/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (typeof character.name === "string" && typeof character.age === "number") {
    characters.push(character);
  } else {
    throw new Error("Character name must be a string, character age must be a number")
  }
}


function getCharacter(name) {
  return characters.find((character) => character.name === name);
}

function getCharactersByAge(minAge) {
  if (minAge >= 0 && typeof minAge !== "string") {
    return characters.filter((character) => character.age >= minAge);
  } 
  else {
    throw new Error("Validation error, minAge has to be a positive number!")
  }
}

function updateCharacter(name, newCharacter) {
  const characterToUpdate = getCharacter(name);
  if (!characterToUpdate) {
    throw new Error(`Character ${name} not found`);
  }
  Object.assign(characterToUpdate, newCharacter)
}

function removeCharacter(name) {
  const characterIndex = characters.findIndex((character) => character.name === name);
  if (characterIndex === -1) {
    throw new Error(`Character ${name} not found`);
  }
  characters.splice(characterIndex, 1);
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
