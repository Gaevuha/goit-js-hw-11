

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

// Посилання на форму та інпут
const form = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]');

// Обробник сабміту форми
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Зупиняє перезавантаження сторінки
  const query = input.value.trim(); // Отримання значення пошуку

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topCenter',
    });
    return;
  }

  clearGallery();  // Очистити попередні результати
  showLoader();    // Показати лоадер

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topCenter',
          icon: '', // Видалено іконку помилки
        });
        return;
      }

      console.log('API data:', data);

      createGallery(data.hits); // Створити галерею
    })
    .catch(error => {
      iziToast.error({
        message: 'An error occurred while fetching data.',
        position: 'topCenter',
        icon: '', // Без іконки
      });
    })
    .finally(() => {
      hideLoader(); // Сховати лоадер незалежно від результату
      form.reset(); // Очистити поле введення
    });
});
