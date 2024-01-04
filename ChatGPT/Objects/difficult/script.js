/* 
1. Глубокое копирование объекта:
Создайте объект originalObject с несколькими вложенными объектами и массивами внутри.
Напишите функцию deepCopy, которая принимает объект и возвращает его глубокую копию (включая вложенные объекты и массивы).
*/

const person = {
  "first name": "Igor",
  "second name": "Cheribulko",
  country: "Belarus",
  age: 41,
  language: ["русский", "белорусский", "english", "polish", "ukrainian"],
};

function originalObject(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = originalObject(obj[key]);
    }
  }

  return copy;
}

const anotherPerson = originalObject(person);
console.log(anotherPerson);
anotherPerson["first name"] = "Ivan";
console.log(anotherPerson);

/*
2. Объединение объектов:
Создайте два объекта: obj1 и obj2, у каждого из которых есть несколько уникальных свойств.
Напишите функцию mergeObjects, которая принимает два объекта в качестве аргументов и возвращает новый объект, содержащий свойства обоих объектов.
*/

function mergeObjects(obj1, obj2) {
  const obj = Object.assign({}, obj1, obj2);
  return obj;
}

const color = {
  first: "red",
  second: "yellow",
};
const font = {
  size: "14px",
  weight: 400,
};

const fontColor = mergeObjects(color, font);
fontColor.first = "brown";

console.log(color);
console.log(font);
console.log(fontColor);

function mergeObjectsSpread(obj1, obj2) {
  const obj = { ...obj1, ...obj2 };
  return obj;
}

color = {
  first: "red",
  second: "yellow",
};
font = {
  size: "14px",
  weight: 400,
};

const newObj = mergeObjectsSpread(color, font);
console.log(newObj);

/*
3.Фильтрация объекта:
Создайте объект car с различными свойствами, представляющими характеристики автомобиля (марка, модель, цвет и т.д.).
Напишите функцию filterObject, которая принимает объект и массив свойств и возвращает новый объект, содержащий только те свойства, которые указаны в массиве.
*/

const car = {
  color: "orange",
  model: "LADA",
  number: 9355,
  engine: "ДВС",
  volume: 1.8,
  age: 2020,
};

let arrKey = ["color", "model", "volume", "age"];

function filterObject(obj, arr) {
  return Object.keys(obj).reduce((result, key) => {
    if (arr.includes(key)) {
      result[key] = obj[key];
    }
    return result;
  }, {});
}
console.log(filterObject(car, arrKey));

/*
4.Прототипы и конструкторы:
Создайте конструктор Person, который принимает параметры name и age и создает объект с этими свойствами.
Добавьте метод greet, который выводит в консоль приветствие, используя имя объекта.
Создайте несколько экземпляров Person и вызовите их метод greet.
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

let userIvan = new Person("Иван", 39);
userIvan.greet();

console.log(userIvan);

/*
5.Вычисляемые свойства:
Создайте объект triangle с полями base и height.
Добавьте вычисляемое свойство area, которое возвращает площадь треугольника (площадь = 0.5 * основание * высота).
Выведите в консоль площадь треугольника.
*/

/*
6.Сравнение объектов:
Напишите функцию compareObjects, которая принимает два объекта и возвращает true, если они имеют одинаковые свойства и значения, и false в противном случае.
Протестируйте функцию на разных объектах.
*/

/*
7.Преобразование в JSON:
Создайте объект с различными типами данных в свойствах (число, строка, массив, объект).
Используя JSON.stringify(), преобразуйте объект в строку JSON.
Выведите строку JSON в консоль. */
