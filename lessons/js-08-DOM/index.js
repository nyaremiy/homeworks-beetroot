import { listSong } from './js/listSongMusic.js';
import { showModaleW } from './js/showModaleWindow.js';
import { singIn } from './js/formSingIn.js';
import { setTrafficColorActive } from './js/traffic.js';
// Створити сторінку, що показує нумерований список пісень:
listSong();

// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.
showModaleW();
document.getElementById('js-form').addEventListener('submit', singIn);
// Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір
document
  .getElementById('js-tarffic')
  .addEventListener('click', setTrafficColorActive);
