/*
Создание объекта:
Создайте объект person с полями name, age и city. Присвойте им значения, представляющие человека.

Доступ к свойствам:
Выведите в консоль имя и возраст из объекта person.

Изменение свойств:
Измените возраст в объекте person на новое значение.
Выведите в консоль обновленный объект person.

Добавление свойства:
Добавьте к объекту person новое поле gender со значением "male" или "female".
Выведите в консоль обновленный объект person.

Удаление свойства:
Удалите поле city из объекта person.
Выведите в консоль обновленный объект person.

Цикл по свойствам:
Используя цикл for...in, выведите все свойства объекта person и их значения в консоль.

Объект в массив:
Создайте массив, содержащий все значения из объекта person. Например, [nameValue, ageValue, genderValue].
Выведите массив в консоль.

Копирование объекта:
Создайте новый объект anotherPerson и скопируйте в него все свойства из объекта person.
Измените значение какого-то свойства в anotherPerson.
Выведите оба объекта в консоль для проверки. 
 */

const person = {
  name: "Иван",
  age: "39",
  city: "Гродно",
};

console.log(`Меня зовут ${person.name}. Мне ${person.age} лет. Я живу в ${person.city}.`);

person.age = "40";
console.log(person.age);

person.gender = "male";

console.log(person.gender);
delete person.city;
console.log(person);

for (let key in person) {
  console.log(`Свойство ${key} имеет значение ${person[key]}`);
}

let arr = [];
for (let key in person) {
  arr.push(person[key]);
}

console.log(arr);

const anotherPerson = {};

for (let key in person) {
  anotherPerson[key] = person[key];
}

anotherPerson.name = "Игорь";

somePerson = Object.assign({}, anotherPerson);

somePerson.age = 41;

console.log(person);
console.log(anotherPerson);
console.log(somePerson);
