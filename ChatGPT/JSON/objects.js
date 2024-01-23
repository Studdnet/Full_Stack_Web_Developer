/* 
Задача 1:
У вас есть объект, представляющий собой информацию о студенте. Создайте глубокую копию этого объекта с использованием JSON.parse и JSON.stringify, и измените копию, не затрагивая исходный объект.
 */
let studentInfo = {
  name: "John",
  age: 20,
  grades: { math: 90, science: 85, history: 75 },
};

let studentInfoCopy = JSON.parse(JSON.stringify(studentInfo));
studentInfoCopy.name = "Igor";

console.log(studentInfo);
console.log(studentInfoCopy);

/* 
Задача 2:
У вас есть массив с объектами, представляющими различных людей. Создайте глубокую копию этого массива с использованием JSON.parse и JSON.stringify, и добавьте нового человека в копию, не затрагивая исходный массив.
*/

let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

let peopleCopy = JSON.parse(JSON.stringify(people));
peopleCopy[0].name = "Angela";
peopleCopy[0].age = 48;

console.log(people);
console.log(peopleCopy);

/* 
Задача 3:
У вас есть сложный объект с вложенными структурами, включая массивы и объекты. Создайте глубокую копию этого объекта с использованием JSON.parse и JSON.stringify, и измените копию, не затрагивая исходный объект.
*/
let complexObject = {
  name: "Complex",
  data: [1, 2, { key: "value" }],
  details: { year: 2022, status: "active" },
};

let complexObjectCopy = JSON.parse(JSON.stringify(complexObject));

complexObjectCopy.data[0] = 5;
complexObjectCopy.data[2].key = "Copy";

console.log(complexObject);
console.log(complexObjectCopy);
