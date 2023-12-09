/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

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
