/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 1; i <= 2; i++) {
  let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
  if (lastFilm === "" || lastFilm === null || lastFilm.length > 50) {
    alert("Название фильма не может быть пустой строкой или быть длинее 50 символов. Давайте попробуем еще раз.");
    i--;
    continue;
  }
  let qualityFilm = prompt("На сколько оцените его?", "");
  if (qualityFilm === "" || qualityFilm === null) {
    alert("Оценка фильма не может быть пустой строкой или не может быть отменена. Давайте попробуем еще раз сначала.");
    i--;
    continue;
  }
  personalMovieDB.movies[lastFilm] = qualityFilm;
}

if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
  alert("Просмотрено очень мало фильмов. У вас все еще впереди.");
  alert("Спасибо за участие");
}
if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert("Вы классический зритель");
  alert("Спасибо за участие");
}
if (personalMovieDB.count >= 30) {
  alert("Да вы просто меломан!!!");
  alert("Спасибо за участие");
}

if (personalMovieDB.count === "" || personalMovieDB.count === null || personalMovieDB.count <= 0) {
  alert("Что-то пошло не так!");
}

console.log(personalMovieDB);
