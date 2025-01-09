# Основные методы работы со строками в JavaScript

Строки в JavaScript представляют собой набор символов и обладают богатым функционалом для работы с текстом. Рассмотрим основные методы, которые позволяют манипулировать строками.

---

## 1. Получение длины строки

- **`length`**  
  Возвращает количество символов в строке.

```javascript
const str = "Hello, World!";
console.log(str.length); // 13
```

---

## 2. Извлечение подстроки

- **`charAt(index)`**  
  Возвращает символ по указанному индексу.

```javascript
const str = "JavaScript";
console.log(str.charAt(4)); // 'S'
```

- **`substring(start, end)`**  
  Возвращает подстроку между `start` и `end` (не включая `end`).

```javascript
const str = "Hello, World!";
console.log(str.substring(0, 5)); // 'Hello'
```

- **`slice(start, end)`**  
  Похож на `substring`, но поддерживает отрицательные индексы.

```javascript
const str = "Hello, World!";
console.log(str.slice(-6, -1)); // 'World'
```

- **`substr(start, length)`**  
  Возвращает подстроку начиная с индекса `start` и длиной `length` символов.

```javascript
const str = "JavaScript";
console.log(str.substr(4, 6)); // 'Script'
```

---

## 3. Поиск в строке

- **`indexOf(substring, fromIndex)`**  
  Возвращает индекс первого вхождения подстроки или `-1`, если подстрока не найдена.

```javascript
const str = "Hello, World!";
console.log(str.indexOf("World")); // 7
```

- **`lastIndexOf(substring)`**  
  Находит индекс последнего вхождения подстроки.

```javascript
const str = "Hello, World!";
console.log(str.lastIndexOf("o")); // 8
```

- **`includes(substring)`**  
  Проверяет наличие подстроки. Возвращает `true` или `false`.

```javascript
const str = "JavaScript";
console.log(str.includes("Script")); // true
```

- **`startsWith(substring)` и `endsWith(substring)`**  
  Проверяет, начинается или заканчивается строка указанной подстрокой.

```javascript
const str = "Hello, World!";
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("World!")); // true
```

---

## 4. Изменение регистра

- **`toLowerCase()`** и **`toUpperCase()`**  
  Преобразует строку в нижний или верхний регистр.

```javascript
const str = "Hello, World!";
console.log(str.toLowerCase()); // 'hello, world!'
console.log(str.toUpperCase()); // 'HELLO, WORLD!'
```

---

## 5. Объединение строк

- **`concat()`**  
  Объединяет строки. Аналогично оператору `+`.

```javascript
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(", ", str2, "!")); // 'Hello, World!'
```

---

## 6. Удаление пробелов

- **`trim()`**, **`trimStart()`**, **`trimEnd()`**  
  Удаляет пробелы с начала, конца или обоих концов строки.

```javascript
const str = "   Hello, World!   ";
console.log(str.trim()); // 'Hello, World!'
console.log(str.trimStart()); // 'Hello, World!   '
console.log(str.trimEnd()); // '   Hello, World!'
```

---

## 7. Замена подстрок

- **`replace(pattern, replacement)`**  
  Заменяет первое вхождение подстроки.

```javascript
const str = "Hello, World!";
console.log(str.replace("World", "JavaScript")); // 'Hello, JavaScript!'
```

- **`replaceAll(pattern, replacement)`**  
  Заменяет все вхождения подстроки.

```javascript
const str = "Hello, Hello!";
console.log(str.replaceAll("Hello", "Hi")); // 'Hi, Hi!'
```

---

## 8. Разделение строки

- **`split(delimiter)`**  
  Разбивает строку на массив подстрок по указанному разделителю.

```javascript
const str = "apple,banana,cherry";
const fruits = str.split(",");
console.log(fruits); // ['apple', 'banana', 'cherry']
```

---

## 9. Повторение строки

- **`repeat(count)`**  
  Повторяет строку указанное количество раз.

```javascript
const str = "Hi!";
console.log(str.repeat(3)); // 'Hi!Hi!Hi!'
```

---

## 10. Проверка символов

- **`match()`** и **`matchAll()`**  
  Ищет совпадения с регулярным выражением.

```javascript
const str = "The rain in Spain";
console.log(str.match(/ain/g)); // ['ain', 'ain']
```

---

## 11. Преобразование строки

- **`padStart(targetLength, padString)`** и **`padEnd(targetLength, padString)`**  
  Дополняют строку до нужной длины указанными символами.

```javascript
const str = "5";
console.log(str.padStart(3, "0")); // '005'
console.log(str.padEnd(3, "*"); // '5**'
```

---

## 12. Получение символов как кода Unicode

- **`charCodeAt(index)`**  
  Возвращает код символа Unicode.

```javascript
const str = "A";
console.log(str.charCodeAt(0)); // 65
```

- **`fromCharCode(code)`**  
  Создает символ из кода Unicode.

```javascript
console.log(String.fromCharCode(65)); // 'A'
```

---

## Пример комбинирования методов

```javascript
const str = "  JavaScript is awesome!  ";
const result = str.trim().replace("awesome", "powerful").toUpperCase();

console.log(result); // 'JAVASCRIPT IS POWERFUL'
```

---

Эти методы покрывают большинство задач, связанных с работой со строками. Используйте их для обработки и анализа текстовых данных!
