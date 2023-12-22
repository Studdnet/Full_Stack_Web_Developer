/* 
1. Сделать первый символ заглавным
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. 

Например:
ucFirst("вася") == "Вася"; 
*/

function ucFirst(str) {
  if (!str) return str;
  str = str[0].toUpperCase() + str.slice(1);
  return console.log(str);
}

ucFirst("вася");

/* 
2. Проверка на спам
Напишите функцию checkSpam(str), возвращающую true, 
если str содержит 'viagra' или 'XXX', а иначе false.
Функция должна быть нечувствительна к регистру:

Например:
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
 */

function checkSpam(str) {
  let viagra = /viagra/i;
  let xxx = /xxx/i;
  if (viagra.test(str) || xxx.test(str)) {
    return console.log("true");
  } else {
    return console.log("false");
  }
}

checkSpam("buy ViAgRA now");
checkSpam("free xxxxx");
checkSpam("innocent rabbit");

function newCheckSpam(str) {
  let lowerStr = str.toLowerCase();

  return console.log(lowerStr.includes("viagra")) || console.log(lowerStr.includes("xxx"));
}

newCheckSpam("buy ViAgRA now");
newCheckSpam("free xxxxx");
newCheckSpam("innocent rabbit");

/* 
3. Усечение строки
Создайте функцию truncate(str, maxlength), которая проверяет длину
строки str и, если она превосходит maxlength, заменяет конец 
str на "…", так, чтобы её длина стала равна maxlength.
Результатом функции должна быть та же строка, если усечение не 
требуется, либо, если необходимо, усечённая строка.

Например:
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
truncate("Всем привет!", 20) = "Всем привет!"
 */

function truncate(str, maxLength) {
  return str.length > maxLength ? console.log(str.slice(0, maxLength - 1) + "...") : console.log(str);
}
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate("Всем привет!", 20);

/* 
4. Выделить число
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять 
числовое значение и возвращать его.

Например:
alert( extractCurrencyValue('$120') === 120 ); // true
 */
