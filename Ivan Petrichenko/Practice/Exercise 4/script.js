/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: true,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      alert("Что-то пошло не так! Повторяем вопрос.");
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
    console.log(`Вы просмотрели ${personalMovieDB.count} фильма.`);
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genresOfMovie = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();
      if (genresOfMovie == "" || genresOfMovie.length > 20 || genresOfMovie == null) {
        alert(`Что-то пошло не так! Повторяем вопрос №${i}`);
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genresOfMovie;
      }
    }
    personalMovieDB.genres.forEach((item, index, array) => {
      console.log(`Любимый жанр ${index + 1} - это ${item}.`);
    });
  },
  rememberMyFilms: function () {
    for (let i = 1; i <= 2; i++) {
      let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
      if (lastFilm === "" || lastFilm === null || lastFilm.length > 50) {
        alert("Название фильма не может быть пустой строкой или быть длинее 50 символов. Давайте попробуем еще раз.");
        i--;
        continue;
      }
      let qualityFilm = prompt("На сколько оцените его?", "");
      if (qualityFilm === "" || qualityFilm === null) {
        alert(
          "Оценка фильма не может быть пустой строкой или не может быть отменена. Давайте попробуем еще раз сначала."
        );
        i--;
        continue;
      }
      personalMovieDB.movies[lastFilm] = qualityFilm;
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
      alert("Просмотрено очень мало фильмов. У вас все еще впереди.");
      alert("Спасибо за участие");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert("Вы классический зритель");
      alert("Спасибо за участие");
    } else if (personalMovieDB.count >= 30) {
      alert("Да вы просто меломан!!!");
      alert("Спасибо за участие");
    } else {
      alert("Что-то пошло не так!");
    }
  },
  showMyDB: function () {
    if (!personalMovieDB.private) {
      console.log(personalMovieDB.private);
    }
  },
  toggleVisibleMyDB: function () {
    console.log(personalMovieDB.private);
    personalMovieDB.private ? (personalMovieDB.private = false) : (personalMovieDB.private = true);
    console.log(personalMovieDB.private);
  },
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();
