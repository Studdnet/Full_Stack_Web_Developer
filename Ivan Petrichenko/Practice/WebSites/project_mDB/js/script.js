/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

// First task ---------------------------------------------------

const promoAdv = document.querySelector(".promo__adv");
const promoAdvTitle = document.querySelector(".promo__adv-title");
const promoAdvImg = document.querySelectorAll(".promo__adv img");
const promoText = document.createElement("div");

promoAdvImg.forEach((item) => {
  item.remove();
});
promoText.classList.add("promo__adv-title");
promoText.style.cssText = "color: red";
promoText.textContent = "Здесь могла бы быть Ваша реклама";

promoAdvTitle.replaceWith(promoText);
// promoAdvTitle.insertAdjacentElement("afterend", promoText);

// Second task -------------------------------------------------------

const filmGenre = document.querySelector(".promo__genre");
filmGenre.textContent = "Драма";

// Third task -------------------------------------------------------

const promoBg = document.querySelector(".promo__bg");
promoBg.style.cssText = "background: url(./img/bg.jpg) center center/cover no-repeat";

//Fourth task --------------------------------------------------------
const movieDB = {
  movies: ["Логан", "Лига справедливости", "Ла-ла лэнд", "Одержимость", "Скотт Пилигрим против...", "Корона"],
};
const promoList = document.querySelector(".promo__interactive-list");
const promoItem = document.querySelectorAll(".promo__interactive-item");

promoItem.forEach((item) => {
  item.remove();
});

movieDB.movies.sort();
for (let item in movieDB.movies) {
  let movie = `<li class='promo__interactive-item'>${+item + 1}. ${
    movieDB.movies[item]
  }<div class='delete'></div></li>`;
  promoList.insertAdjacentHTML("beforeend", movie);
}

/* 
Petrichenko's code 
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});
 */
